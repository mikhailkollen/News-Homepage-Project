const toggleBtn = document.querySelector(".toggle-btn");
const btnContainer = document.querySelector(".toggle-btn-container");
const navLinks = document.querySelector(".nav-links");
const bodyFrame = document.querySelector("body");
const navLinksOpened = document.querySelector(".nav-open");

window.addEventListener("resize", () => {
  navLinks.classList.remove("transform-animation");
});

btnContainer.addEventListener("click", () => {
  navLinks.classList.add("transform-animation");
  navLinks.classList.toggle("nav-open");
  toggleBtn.classList.toggle("close-btn");
});

// navLinks.addEventListener("click"),
//   (e) => {
//     if (e.target !== navLinks && e.target !== toggleBtn) {
//       navLinksOpened.classList.remove("nav-open");
//     }
//   };
