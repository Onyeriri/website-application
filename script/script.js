// variable declaration and assignment
const navMenu = document.querySelector(".nav");
const navButton = document.querySelector(".nav-btn");
const closeBtn = document.querySelector("#close");

// function for opening the nav bar
navButton.addEventListener("click", () => {
  navMenu.classList.remove("close-nav");
  navMenu.classList.add("nav-open");
});

// function for closing navigation bar
closeBtn.addEventListener("click", () => {
  navMenu.classList.add("close-nav");
  navMenu.classList.remove("nav-open");
});
