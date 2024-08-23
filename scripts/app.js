// check user last swith theme btn history
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
const submenuMenuBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const arrowDown = document.querySelector(".arrow-down");
const navOpenBtn = document.querySelector(".nav-icon");
const navSection = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const navCloseBtn = document.querySelector(".nav-close-btn");
const cart = document.querySelector(".cart");
const cartBox = document.querySelector(".cart-box");
const closeBtn = document.querySelector(".close-btn-cart");

//  change  light / dark them function
const changTheme = () => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};
const cartOpenBox = () => {
  cartBox.classList.remove("-left-64");
  cartBox.classList.add("left-0");
  overlay.classList.add("open");
 
};
const cartCloseBox = () => {
  cartBox.classList.remove("left-0");
  cartBox.classList.add("-left-64");
  overlay.classList.remove("open");
};
const closNavFunc = () => {
  navSection.classList.remove("right-0");
  overlay.classList.remove("open");

};

// toggle them event
toggleThemeBtn.forEach((btn) => {
  btn.addEventListener("click", changTheme);
});

//  open sub menu is movile design
submenuMenuBtn.addEventListener("click", function (e) {
  e.currentTarget.parentElement.classList.toggle("text-orange-300");

  arrowDown.classList.toggle("rotate-90");
  submenu.classList.toggle("flex");
});

//  ham menu fuction
navOpenBtn.addEventListener("click", function () {
  navSection.classList.remove("-right-64");
  navSection.classList.add("right-0");
  overlay.classList.add("open");
});
// close nav btn
navCloseBtn.addEventListener("click", closNavFunc);
overlay.addEventListener("click", closNavFunc);
overlay.addEventListener("click", cartCloseBox);
//  cart box open
cart.addEventListener("click", cartOpenBox);
//  cart box close
closeBtn.addEventListener("click", cartCloseBox);
