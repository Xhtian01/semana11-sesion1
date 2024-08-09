const hamburger = document.getElementById('menu-hamburger');
const lista = document.getElementById('lista-menu');

function mostrar() {
  lista.classList.toggle('active');
  hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', mostrar);
