// //carousel interier
// let currentIndex = 0;
// const carouselItem = document.querySelectorAll('.studio__carousel-inner-item');

// function goToSlide (index) {
//     if (index < 0) {
//         index = carouselItem.length - 1;
//     } else if (index >= carouselItem.length) {
//         index = 0;
//     }
//     currentIndex = index;
//     document.querySelector('.studio__carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function goToNextSlide () {
//     goToSlide (currentIndex + 1);
// }

// function goToPrevSlide () {
//     goToSlide (currentIndex - 1);
// }



// const nextButton = document.querySelector('.studio__button-next');
// const prevButton = document.querySelector ('.studio__button-prev');

// prevButton.addEventListener('click', goToPrevSlide());
// nextButton.addEventListener('click', goToNextSlide());
// end code



//================================
//CAROUSEL RESULTS
//================================

// let currentIndexResults = 0;
// const carouselItemResults = document.querySelectorAll('.results__carousel-inner-item');

// function goToSlideResults (index) {
//     if (index < 0) {
//         index = carouselItemResults.length - 1;
//     } else if (index >= carouselItemResults.length) {
//         index = 0;
//     }
//     currentIndexResults = index;
//     document.querySelector('.results__carousel-inner').style.transform = `translateX(-${currentIndexResults * 100}%)`;
// }

// function goToNextSlideResults () {
//     goToSlideResults (currentIndexResults + 1);
// }

// function goToPrevSlideResults () {
//     goToSlideResults (currentIndexResults - 1);
// }



// const nextButtonResults = document.querySelector('.results__button-next');
// const prevButtonResults = document.querySelector ('.results__button-prev');

// prevButtonResults.addEventListener('click', goToPrevSlideResults);
// nextButtonResults.addEventListener('click', goToNextSlideResults);


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







