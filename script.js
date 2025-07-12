  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const visibleSlides = 3;
  let index = 0;

  function moveSlides() {
    index++;
    const maxIndex = Math.ceil(slides.length / visibleSlides) - 1;
    if (index > maxIndex) index = 0;
    const moveX = index * 100;
    track.style.transform = `translateX(-${moveX}%)`;
  }

  setInterval(moveSlides, 4000);
