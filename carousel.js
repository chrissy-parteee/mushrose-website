document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("table tbody");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  if (!container || !prevBtn || !nextBtn) return;

  function getScrollStep() {
    const firstCard = container.querySelector("tr");
    if (!firstCard) return 295;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap) || 0;

    return cardWidth + gap;
  }

  function slide(direction) {
    container.scrollBy({
      left: direction * getScrollStep(),
      behavior: "smooth",
    });
  }

  prevBtn.addEventListener("click", () => slide(-1));
  nextBtn.addEventListener("click", () => slide(1));
});