// Menu mobile: abre e fecha a lista ao clicar no botão ☰
const botao = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
botao.addEventListener("click", () => {
  menu.classList.toggle("aberto");
});
// Fecha o menu ao clicar em um link
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("aberto"));
});
