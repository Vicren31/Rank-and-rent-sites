// Remorquage Joliette : menu mobile, barre d'appel, événements GA4, formulaire FormSubmit.
(function () {
  "use strict";

  function track(name, params) {
    if (typeof window.gtag === "function") window.gtag("event", name, params || {});
  }

  // Année courante dans le pied de page
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Menu mobile
  var toggle = document.querySelector(".menu-toggle");
  var mnav = document.getElementById("mobile-nav");
  if (toggle && mnav) {
    toggle.addEventListener("click", function () {
      var hdr = document.querySelector(".site-header");
      if (hdr) mnav.style.top = Math.max(0, hdr.getBoundingClientRect().bottom) + "px";
      var open = mnav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    mnav.addEventListener("click", function (e) {
      if (e.target.closest("a")) { mnav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); document.body.style.overflow = ""; }
    });
  }

  // Barre d'appel mobile : apparaît après 300 px de défilement
  var cta = document.getElementById("mobile-cta");
  if (cta) {
    var shown = false;
    var onScroll = function () {
      var should = window.scrollY > 300;
      if (should !== shown) {
        shown = should;
        cta.classList.toggle("visible", should);
        cta.setAttribute("aria-hidden", should ? "false" : "true");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // GA4 : clics sur le numéro de téléphone
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[href^='tel:']");
    if (!a) return;
    track("click_to_call", { link_location: a.getAttribute("data-loc") || "page", page_path: location.pathname });
  });

  // Formulaires : envoi AJAX à FormSubmit, puis redirection vers /merci/
  var forms = document.querySelectorAll("form.lead-form");
  Array.prototype.forEach.call(forms, function (form) {
    var started = false;
    form.addEventListener("input", function () {
      if (!started) { started = true; track("form_start", { form_id: form.id }); }
    });

    form.addEventListener("submit", function (e) {
      if (!window.fetch || !window.FormData) return; // envoi classique en repli
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      var btn = form.querySelector("button[type='submit']");
      var label = btn ? btn.innerHTML : "";
      if (btn) { btn.disabled = true; btn.textContent = "Envoi en cours…"; }
      var prev = form.querySelector(".form-error");
      if (prev) prev.remove();

      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      data.page = location.pathname;

      var endpoint = form.getAttribute("action").replace("formsubmit.co/", "formsubmit.co/ajax/");
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res && (res.success === true || res.success === "true")) {
            try { sessionStorage.setItem("rj_nom", (data.nom || "").split(" ")[0]); } catch (err) {}
            var done = false;
            var go = function () { if (!done) { done = true; location.href = "/merci/"; } };
            if (typeof window.gtag === "function") {
              window.gtag("event", "generate_lead", {
                form_id: form.id, ville: data.ville || "", type_projet: data.type_projet || "",
                event_callback: go, event_timeout: 1200
              });
              setTimeout(go, 1500);
            } else { go(); }
          } else { fail(); }
        })
        .catch(fail);

      function fail() {
        var err = document.createElement("p");
        err.className = "form-error";
        err.setAttribute("role", "alert");
        err.innerHTML = "L'envoi n'a pas fonctionné. Réessayez ou appelez-nous au <a href=\"tel:+14509150067\">450-915-0067</a>.";
        form.insertBefore(err, form.firstChild);
        if (btn) { btn.disabled = false; btn.innerHTML = label; }
      }
    });
  });

  // Page de remerciement : prénom personnalisé
  var who = document.getElementById("merci-nom");
  if (who) {
    try { var n = sessionStorage.getItem("rj_nom"); if (n) who.textContent = ", " + n; } catch (err) {}
  }
})();
