// Função para rolagem do carrossel
document.querySelectorAll(".carousel").forEach((carousel) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });
});

// Navegação no menu inferior
document.querySelectorAll(".menu-item").forEach((item, index) => {
  item.addEventListener("click", () => {
    switch (index) {
      case 0:
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case 1:
        document.querySelector(".sustainability").scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        document.querySelector(".practices").scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        window.location.href = "https://forms.office.com/r/7j1SaeVL8A?embed=true";
        break;
      default:
        break;
    }
  });
});
