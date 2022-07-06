//hamburger
const menuButton = document.querySelector("#menu")
const navbar = document.querySelector("header>nav")

menuButton.onclick = function() {
  console.log("toggle")
  navbar.classList.toggle("hide")
}