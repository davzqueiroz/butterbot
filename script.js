document.addEventListener("DOMContentLoaded", function () {
  // Adiciona o efeito de rolagem suave para os links com a classe 'scroll-to'
  const scrollLinks = document.querySelectorAll(".scroll-to");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  function scrollToSection(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth", // Adiciona o comportamento suave
      block: "start", // Rola para o início da seção
      inline: "nearest", // Rola para a posição mais próxima
    });
  }
});
