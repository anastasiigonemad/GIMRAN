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


  const myCarouselElement = document.querySelector('.results__carousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  touch: true
})



//================================
//BURGER MENU 
//================================

document.querySelector('.burger__menu').addEventListener('click', function() {
  document.querySelector('.burger__nav').classList.toggle('open');
})

function displayBigImg () {
  const img = document.querySelector('.diplom-img');
  const zoom = document.createElement('div');

  zoom.className = 'zoom';
  zoom.style.position = 'absolute';
  zoom.style.top = '0';
  zoom.style.left = '0';
  zoom.style.width = '100%';
  zoom.style.height = '100%';
  zoom.style.backgroundColor = 'rgba(0,0,0,0.5)';
  zoom.style.display = 'none';
  img.parentNode.insertBefore(zoom, img);

  const imgClone = img.cloneNode();
  imgClone.style.position = 'absolute';
  imgClone.style.top = '50%';
  imgClone.style.left = '50%';
  imgClone.style.width = '100%';
  imgClone.style.height = '100%';
  imgClone.style.marginTop = '-50%';
  imgClone.style.marginLeft = '-50%';
  imgClone.style.opacity = '0.5';
  imgClone.style.zIndex = '1';
  zoom.append(imgClone);

  const imgOverlay = document.createElement('div');
  imgOverlay.className = 'img-overlay';
  imgOverlay.style.position = 'absolute';
  imgOverlay.style.top = '0';
  imgOverlay.style.left = '0';
  imgOverlay.style.width = '100%';
  imgOverlay.style.height = '100%';
  imgOverlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  imgOverlay.style.zIndex = '2';
  zoom.append(imgOverlay);

  const imgOverlayText = document.createElement('div');
  imgOverlayText.className = 'img-overlay-text';
  imgOverlayText.style.position = 'absolute';
  imgOverlayText.style.top = '50%';
  imgOverlayText.style.left = '50%';
  imgOverlayText.style.width = '100%';
  imgOverlayText.style.height = '100%';
  imgOverlayText.style.marginTop = '-50%';
  imgOverlayText.style.marginLeft = '-50%';
  imgOverlayText.style.color = 'white';
  imgOverlayText.style.zIndex = '3';
  imgOverlay.append(imgOverlayText);

  const imgOverlayTextContent = document.createTextNode('Нажмите, чтобы закрыть');
  imgOverlayText.append(imgOverlayTextContent);

  zoom.addEventListener('click', function() {
    zoom.style.display = 'none';
  });

  img.style.display = 'none';
  zoom.style.display = 'block';
};

document.querySelector('.diplom-img').addEventListener('click', displayBigImg);
