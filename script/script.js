// variable declaration and assignment
const navMenu = document.querySelector(".nav");
const navButton = document.querySelector(".nav-btn");
const closeBtn = document.querySelector("#close");
const listItems = document.querySelectorAll(".list-item");
const navTwo = document.querySelector(".nav-two");
const arrs = Array.prototype.slice.call(listItems);

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

// function that add active class to the nav
