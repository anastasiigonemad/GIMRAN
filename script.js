//================================
//CAROUSEL REVIEWS
//================================

function sliderPluggin(activeslide = 0) {
    const slides = document.querySelectorAll('.review__slide');
    
    slides[activeslide].classList.add('active');
  
    function clearActiveClasses() {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
  
    for (const slide of slides) {
      slide.addEventListener('click', () => {
        clearActiveClasses();
        slide.classList.add('active');
      });
    }
  }
  
  sliderPluggin(0);


  const myCarouselElement = document.querySelector('.results__carousel')
