const menu = document.querySelector(".menu");
const transition = document.querySelector(".transition");
const splitScreen = document.querySelector(".splitScreen");
const navlinks = document.querySelector(".nav-links");
const navlist = document.querySelectorAll(".nav-list");

let showpage = false;
menu.addEventListener("click", function () {
  if (showpage == false) {
    menu.classList.add("close");
    transition.classList.add("show");
    splitScreen.classList.add("show");
    navlinks.classList.add("show");
    navlist.forEach((navlist) => navlist.classList.add("show"));

    showpage = true;
  } else {
    menu.classList.remove("close");
    transition.classList.remove("show");
    splitScreen.classList.remove("show");
    navlinks.classList.remove("show");
    navlist.forEach((navlist) => navlist.classList.remove("show"));

    showpage = false;
  }
});
