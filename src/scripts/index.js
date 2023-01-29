const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
    // o if com event.preventdefault está aqui para que no mobile o menu nao seja aberto e em seguida fechado, 
    // por o eventlistener está com click e touchstart
  if (event.type == "touchstart") event.preventDefault();

  const nav = document.getElementById("nav");
  const span = document.getElementById("btn-mobile");
  nav.classList.toggle("active");
  span.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
// É colocando o touchstart porque no mobile teria mais ou menos 300ms antes de começar o click, 
// o que ficaria estranho.
btnMobile.addEventListener("touchstart", toggleMenu);
