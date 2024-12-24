/* script.js */

// Função para rolagem do carrossel
document.querySelectorAll(".carousel").forEach((carousel) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    carousel.classList.add("active");
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a velocidade do scroll
    carousel.scrollLeft = scrollLeft - walk;
  });
});

// Função para navegação no menu
document.querySelectorAll(".menu-item").forEach((button, index) => {
  button.addEventListener("click", () => {
    // Simula navegação entre páginas
    switch (index) {
      case 0:
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case 1:
        document.querySelector(".sustainability").scrollIntoView({
          behavior: "smooth",
        });
        break;
      case 2:
        document.querySelector(".practices").scrollIntoView({
          behavior: "smooth",
        });
        break;
      case 3:
        window.location.href =
          "https://forms.office.com/r/7j1SaeVL8A?embed=true"; // Link para o formulário
        break;
      default:
        break;
    }
  });
});
