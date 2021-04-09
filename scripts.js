// const burger = document.querySelector(".burger");
// const nav = document.querySelector(".nav-links");

// burger.addEventListener("click", () => {
//         nav.classList.toggle("nav-active");
// }

const toggleButton = document.getElementsByClassName("toggle-button")[0];
// const nav = document.querySelector(".nav-links")[0];
const navLinks = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener("click", () => {
  //Toggle Nav
  navLinks.classList.toggle("active");
});
