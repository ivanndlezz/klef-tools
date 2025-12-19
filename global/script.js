/*/ Toggle simple del menú móvil
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".mega-menu").classList.toggle("open");
});

document.querySelector("#close-ham").addEventListener("click", function () {
  document.querySelector(".mega-menu").classList.remove("open");
});

*/

function toggleMenu() {
  document.querySelector(".mega-menu").classList.toggle("open");
}

console.log("is loaded");
