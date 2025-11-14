document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel, index) => {
    const slides = carousel.querySelectorAll('figure');
    const buttonsContainer = document.getElementById(`carousel${index + 1}-buttons`);

    if (!buttonsContainer) return;

    slides.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.addEventListener('click', () => showSlide(i));
      buttonsContainer.appendChild(btn);
    });

    const buttons = buttonsContainer.querySelectorAll('button');
    let current = 0;

    function showSlide(i) {
      slides[current].classList.remove('active');
      buttons[current].classList.remove('active');
      current = i;
      slides[current].classList.add('active');
      buttons[current].classList.add('active');
    }

    slides[0].classList.add('active');
    buttons[0].classList.add('active');
  });
});
