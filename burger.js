let hamb = document.querySelector(".hamb");
let navList = document.querySelector(".nav_list");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamb.classList.toggle("active");
  navList.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav_link");
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamb.classList.remove("active");
  navList.classList.remove("active");
}