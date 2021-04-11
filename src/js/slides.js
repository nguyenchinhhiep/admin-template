export const makeSlideFullScreen1 = (el) => {
  const slideContainer = document.getElementById(el);
  const slideList = [...slideContainer.querySelectorAll('.slide-item')];
  const navPrev = slideContainer.querySelector('.nav-prev');
  const navNext = slideContainer.querySelector('.nav-next');
  const dots = slideContainer.querySelector('.slide-dots');
  const auto = true;
  const INTERVALTIME = 5000;
  const SLIDETIME = 1000;
  let currentIndex = 0;
  let sliderInterval = null;
  let clickable = true;

  const setDuration = () => {
    slideList.forEach(slide => {
      slide.setAttribute(
        'style',
         `animation-duration: ${SLIDETIME}ms`
      )
    })
  }
  const init = () => {
    setDuration();
    slideList[currentIndex].classList.add('active');
  }
  init();

  const changeSlide = (forward) => {
    if(!clickable){
      return;
    }
    clickable = false;
    // Current Slide
    const currentSlide = slideList[currentIndex];
    if (forward) {
      if (currentIndex == slideList.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
    } else {
      if (currentIndex === 0) {
        currentIndex = slideList.length - 1;
      } else {
        currentIndex--;
      }
    }
    currentSlide.classList.remove('active');
    const nextSlide = slideList[currentIndex];
    currentSlide.classList.add('is-hiding');
    nextSlide.classList.add('active');
    nextSlide.classList.add('is-showing');
    
    nextSlide.onanimationend = () => {
      currentSlide.classList.remove('is-hiding');
      nextSlide.classList.remove('is-showing');
      clickable = true;
    }

  }

  const resetAuto = () => {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
      changeSlide(true);
    }, INTERVALTIME)
  }

  navPrev.onclick = () => {
    changeSlide(false);
    if(auto){
      resetAuto();
    }
  }
  navNext.onclick = () => {
    changeSlide(true);
    if(auto){
      resetAuto();
    }
  }

  if(auto){
    sliderInterval = setInterval(() => {
      changeSlide(true);
    }, INTERVALTIME)
  }
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

  const setDuration = () => {
    slideList.forEach(slide => {
      slide.setAttribute(
        'style',
         `transition: transform ease ${SLIDETIME}ms;
          animation-duration: ${SLIDETIME}ms`
      )
    })
  }

  const initSlider = () => {
    setDuration();
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

  const resetAuto = () => {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
      changeSlide(true);
    }, INTERVALTIME)
  }
  navPrev.onclick = () => {
    changeSlide(false);
    if(auto){
      resetAuto();
    }
  }

  navNext.onclick = () => {
    changeSlide(true);
    if(auto){
      resetAuto();
    }
  }


  if(auto){
    sliderInterval = setInterval(() => {
      changeSlide(true);
    }, INTERVALTIME)
  }
}
