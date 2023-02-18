// "use strict";

// const toggleBtn = document.querySelector(".toggle-btn");
// const toggleArea = document.querySelector(".toggle-area");
// const basicPrice = document.querySelector(".plan-price-1");
// const profPrice = document.querySelector(".plan-price-2");
// const masterPrice = document.querySelector(".plan-price-3");

// toggleArea.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (toggleArea.classList.contains("monthly")) {
//     toggleArea.classList.remove("monthly");
//     toggleArea.classList.add("anually");
//     basicPrice.innerHTML = `<p class="plan-price-1"><span>$</span>49</p>`;
//     profPrice.innerHTML = `  <p class="plan-price-2"><span>$</span>169</p>`;
//     masterPrice.innerHTML = `   <p class="plan-price-3"><span>$</span>279</p>`;
//   } else {
//     toggleArea.classList.add("monthly");
//     toggleArea.classList.remove("anually");
//     basicPrice.innerHTML = `<p class="plan-price-1"><span>$</span>04</p>`;
//     profPrice.innerHTML = `  <p class="plan-price-2"><span>$</span>16</p>`;
//     masterPrice.innerHTML = ` <p class="plan-price-3"><span>$</span>27</p>`;
//   }
// });

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".main-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  console.log("vertical nav opened");
});
///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("navigation-list-link"))
      headerEl.classList.toggle("nav-open");
  });
});
