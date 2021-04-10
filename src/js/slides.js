export const makeSlideFullScreen1 = (el) => {
  // const slideContainer = document.getElementById(el);
  // const slideList = slideContainer.querySelectorAll('.slide-item');
  // const navPrev = slideContainer.querySelector('.nav-prev');
  // const navNext = slideContainer.querySelector('.nav-next');
  // const dots = slideContainer.querySelector('.slide-dots');
  // let currentIndex = 0;
  // slideList[currentIndex].classList.add('active');
  // let isAnimating = false;

  // const changeSlide = (dir) => {
  //   if(isAnimating){
  //     return;
  //   }
  //   isAnimating = true;
  //   // Current Slide
  //   const currentSlide = slideList[currentIndex];

  //   if (dir === 'next') {
  //     if (currentIndex >= slideList.length - 1) {
  //       currentIndex = 0;
  //     } else {
  //       currentIndex++;
  //     }
  //   } else {
  //     if (currentIndex === 0) {
  //       currentIndex = slideList.length - 1;
  //     } else {
  //       currentIndex--;
  //     }
  //   }

  //   const showSlide = (slide) => {
  //     slide.classList.add('is-showing');
  //     slide.onanimationend = () => {
  //       slide.classList.remove('is-showing');
  //       slide.classList.add('active');
  //     }
  //   }

  //   const hidelide = (slide) => {
  //     slide.classList.remove('active');
  //     slide.classList.add('is-hiding');
  //     slide.onanimationend = () => {
  //       slide.classList.remove('is-hiding');
  //     }
  //   }
  //   // Next Slide
  //   const nextSlide = slideList[currentIndex];
  //   hidelide(currentSlide);
  //   showSlide(nextSlide);

  // }
  // navPrev.onclick = () => {
  //   changeSlide('prev');
  // }
  // navNext.onclick = () => {
  //   changeSlide('next');
  // }

}

export const makeSlideFullScreen2 = (el) => {
  const slideContainer = document.getElementById(el);
  const slideList = [...slideContainer.querySelectorAll('.slide-item')];
  const navPrev = slideContainer.querySelector('.nav-prev');
  const navNext = slideContainer.querySelector('.nav-next');
  const auto = true;
  const INTERVALTIME = 5000;
  const SLIDETIME = 500;
  let currentSlide = null;
  let nextSlide = null;
  let clickable = true;
  let sliderInterval = null;

  const createDots = () => {
    const dots = document.createElement('ul');
    dots.classList.add('slide-dots');

    const dotItems = slideList.map(slide => {
      return `<li class="dot"></li>`
    }).join("");
    dots.innerHTML = dotItems;
    slideContainer.appendChild(dots);
  }

  const reset = () => {
    slideList.forEach(slide => {
      slide.setAttribute(
        'style',
         `transition: transform ease ${SLIDETIME}ms;
          animation-duration: ${SLIDETIME}ms`
      )
    })
  }

  const initSlider = () => {
    reset();
    slideList[0].classList.add('active');
    createDots();
  }
  initSlider();

  const changeSlide = (forward) => {
      if(!clickable){
        return;
      }
      clickable = false;
      currentSlide = slideContainer.querySelector('.slide-item.active');
      const currentSlideIndex = slideList.indexOf(currentSlide);
      if(forward){
        const nextSlideIndex = (currentSlideIndex + 1) % slideList.length;
        nextSlide = slideList[nextSlideIndex];
        currentSlide.classList.add('slideOutLeft');
        nextSlide.classList.add('slideInRight','active');
      } 
      else {
        const nextSlideIndex = (currentSlideIndex - 1 + slideList.length) % slideList.length;
        nextSlide = slideList[nextSlideIndex];
        currentSlide.classList.add('slideOutRight');
        nextSlide.classList.add('slideInLeft','active');
      }
      nextSlide.onanimationend = () => {
        if(!clickable){
          currentSlide.className = 'slide-item';
          clickable = true;
        }
      }
  }

  navPrev.onclick = () => {
    changeSlide(false);
  }

  navNext.onclick = () => {
    changeSlide(true);
  }
  if(auto){
    sliderInterval = setInterval(() => {
      changeSlide(true);
    }, INTERVALTIME)
  }
}
