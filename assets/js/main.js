const navbarCollapse = document.querySelector(".header__nav .nav-collapse");
const navbarToggler = document.querySelector(".header_content .navbar-toggler");

navbarToggler.addEventListener("click", function () {
  if (navbarCollapse.classList.contains("show")) {
    // dropdownMenu.style.display = "none";
    navbarCollapse.classList.remove("show");
  }
})

$(document).ready(function () {

})