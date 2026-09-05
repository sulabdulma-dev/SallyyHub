/* =========================================================
   main.js — small shared behaviors for every page
   - Toggles the mobile nav menu open/closed
   - Sets the current year in the footer
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  var toggleBtn = document.querySelector(".navbar__toggle");
  var links = document.querySelector(".navbar__links");

  if (toggleBtn && links) {
    toggleBtn.addEventListener("click", function () {
      links.classList.toggle("is-open");
      var isOpen = links.classList.contains("is-open");
      toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
