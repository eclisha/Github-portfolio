console.log("Portfolio Loaded Successfully");

const menu = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
