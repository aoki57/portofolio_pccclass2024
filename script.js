// navbar
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");
const navContainer = document.querySelector(".nav-container");

menu.addEventListener("click", function () {
  nav.classList.toggle("nav-active");
  menu.classList.toggle("menu-toggle");
});

let navHeight = navContainer.offsetHeight;

window.addEventListener("scroll", function () {
  if (this.window.scrollY > navHeight) {
    navContainer.style.position = "fixed";
    navContainer.classList.add("nav-move");
  } else {
    navContainer.style.position = "relative";
    navContainer.classList.remove("nav-move");
  }
});

// skill
const circle = document.getElementById("circle");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");

let rotateValue = circle.style.transform;
let rotateSum;

upBtn.onclick = function () {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

downBtn.onclick = function () {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

const li = document.querySelectorAll(".acc-text li");

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e) => {
    let clickedLi;
    if (e.target.classList.contains("question-arrow")) {
      clickedLi = e.target.parentElement;
    } else {
      clickedLi = e.target.parentElement.parentElement;
    }
    clickedLi.classList.toggle("showText");
  });
}
