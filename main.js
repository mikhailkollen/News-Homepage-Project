const toggleBtn = document.querySelector(".toggle-btn");
const btnContainer = document.querySelector(".toggle-btn-container");
const navLinks = document.querySelector(".nav-links");
const bodyFrame = document.querySelector("body");
const navLinksOpened = document.querySelector(".nav-open");
const overlay = document.querySelector(".overlay-div");

// To Close the Burger Menu when the window is resized
window.addEventListener("resize", () => {
  navLinks.classList.remove("transform-animation");
  navLinks.classList.remove("nav-open");
  overlay.classList.remove("overlay");
  toggleBtn.classList.remove("close-btn");
});

// To Close/Open the Burger Menu
toggleBtn.addEventListener("click", () => {
  navLinks.classList.add("transform-animation");
  navLinks.classList.toggle("nav-open");
  toggleBtn.classList.toggle("close-btn");
  overlay.classList.toggle("overlay");
});

// To Close the Burger Menu when clicked outside
overlay.addEventListener("click", (e) => {
  navLinks.classList.remove("nav-open");
  overlay.classList.remove("overlay");
  toggleBtn.classList.toggle("close-btn");
});
