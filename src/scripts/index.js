const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  // o if com event.preventdefault está aqui para que no mobile o menu nao seja aberto e em seguida fechado,
  // por o eventlistener está com click e touchstart
  if (event.type == "touchstart") event.preventDefault();

  const nav = document.getElementById("nav");
  const span = document.getElementById("btn-mobile");
  nav.classList.toggle("active");
  span.classList.toggle("active");

  // Dessa forma se pode controlar o aria-expanded true or false para melhorar a acessibilidade.
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);

  //Alterar a aria-label para ficar Abrir Menu ou Fechar Menu.
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
// É colocando o touchstart porque no mobile teria mais ou menos 300ms antes de começar o click,
// o que ficaria estranho.
btnMobile.addEventListener("touchstart", toggleMenu);
