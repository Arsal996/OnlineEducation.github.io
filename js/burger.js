const burger = document.querySelector(".burger");
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector(".nav-menu");
const rightNav = document.querySelector(".rightNav")

burger.addEventListener("click", function () {
    rightNav.classList.toggle("show-search");
    navMenu.classList.toggle("show-menu");
    navbar.classList.toggle("t-nav");
    burger.classList.toggle("closeburger")
});










