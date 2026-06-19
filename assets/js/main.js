/* Jejak Kota — progressive enhancement only.
   The site is fully readable with JS disabled; this just adds polish. */
(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Route line fill grows with scroll progress */
  var fill = document.querySelector(".route__fill");
  if (fill && !reduceMotion) {
    var onScroll = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      document.documentElement.style.setProperty("--route-progress", pct.toFixed(2) + "%");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  } else if (fill) {
    document.documentElement.style.setProperty("--route-progress", "100%");
  }

  /* Scroll reveal + activate station dots */
  var io;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          var st = en.target.querySelector(".station");
          if (st) st.classList.add("station--active");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* Footer year */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
