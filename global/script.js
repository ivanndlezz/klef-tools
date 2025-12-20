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

//console.log("is loaded");

/**/

document.addEventListener("DOMContentLoaded", () => {
  const rutas = [
    "/",
    "/apps/",
    "/apps/mega-menu",
    "/apps/modular-creatio-playground",
    "/apps/svg-symbol-creator",
    "/apps/ui/",
    "/apps/ui/design-system/",
    "/apps/ui/component-library/",
    "/docs",
    "/docs/ux-ui-architecture-principles.html",
    "/docs/about-styles.html",
  ];
  const div = document.createElement("div");
  div.id = "only-with-stylebot";
  div.style.display = "none";
  div.innerHTML = rutas.map((r) => `<a href="${r}">${r}</a>`).join("");
  document.body.appendChild(div);
});
