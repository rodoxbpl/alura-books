/******* Swiper de imagens do banner *******/

const botaoMenu = document.querySelector('.cabecalho__menu-hamburguer');
const botaoMenu1024 = document.querySelector('.cabecalho__menu');

botaoMenu.addEventListener('click', () => {
  botaoMenu.classList.toggle('cabecalho__menu-hamburguer-ativo');
})

const swiper = new Swiper('.swiper', {
  spaceBetween: 10,
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const btnPerfil = document.getElementById('perfil');
btnPerfil.addEventListener("click", () => {
  window.location.href = "cadastro.html";
})





