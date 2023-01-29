const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const nav = document.getElementById("nav");
  const span = document.getElementById("btn-mobile");
  nav.classList.toggle("active");
  span.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
