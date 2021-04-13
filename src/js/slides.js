export const makeSliderFullScreen1 = (el) => {
  const sliderContainer = document.getElementById(el);
  const sliderItems = [...sliderContainer.querySelectorAll('.slider-item')];
  const navPrev = sliderContainer.querySelector('.nav-prev');
  const navNext = sliderContainer.querySelector('.nav-next');
  const dots = sliderContainer.querySelector('.slider-dots');
  const auto = true;
  const INTERVALTIME = 5000;
  const SLIDETIME = 1000;
  let currentIndex = 0;
  let sliderInterval = null;
  let clickable = true;

  const setDuration = () => {
    sliderItems.forEach(slide => {
      slide.setAttribute(
        'style',
         `animation-duration: ${SLIDETIME}ms`
      )
    })
  }
  const init = () => {
    setDuration();
    sliderItems[currentIndex].classList.add('active');
  }
  init();

  const changeSlide = (forward) => {
    if(!clickable){
      return;
    }
    clickable = false;
    // Current Slide
    const currentSlide = sliderItems[currentIndex];
    if (forward) {
      if (currentIndex == sliderItems.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
    } else {
      if (currentIndex === 0) {
        currentIndex = sliderItems.length - 1;
      } else {
        currentIndex--;
      }
    }
    currentSlide.classList.remove('active');
    const nextSlide = sliderItems[currentIndex];
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

export const makeSliderFullScreen2 = (el) => {
  const sliderContainer = document.getElementById(el);
  const sliderItems = [...sliderContainer.querySelectorAll('.slider-item')];
  const navPrev = sliderContainer.querySelector('.nav-prev');
  const navNext = sliderContainer.querySelector('.nav-next');
  const auto = true;
  const INTERVALTIME = 5000;
  const SLIDETIME = 500;
  let currentSlide = null;
  let nextSlide = null;
  let clickable = true;
  let sliderInterval = null;

  const createDots = () => {
    const dots = document.createElement('ul');
    dots.classList.add('slider-dots');

    const dotItems = sliderItems.map(slide => {
      return `<li class="dot"></li>`
    }).join("");
    dots.innerHTML = dotItems;
    sliderContainer.appendChild(dots);
  }

  const setDuration = () => {
    sliderItems.forEach(slide => {
      slide.setAttribute(
        'style',
         `transition: transform ease ${SLIDETIME}ms;
          animation-duration: ${SLIDETIME}ms`
      )
    })
  }

  const initSlider = () => {
    setDuration();
    sliderItems[0].classList.add('active');
    createDots();
  }
  initSlider();

  const changeSlide = (forward) => {
      if(!clickable){
        return;
      }
      clickable = false;
      currentSlide = sliderContainer.querySelector('.slider-item.active');
      const currentSlideIndex = sliderItems.indexOf(currentSlide);
      if(forward){
        const nextSlideIndex = (currentSlideIndex + 1) % sliderItems.length;
        nextSlide = sliderItems[nextSlideIndex];
        currentSlide.classList.add('slideOutLeft');
        nextSlide.classList.add('slideInRight','active');
      } 
      else {
        const nextSlideIndex = (currentSlideIndex - 1 + sliderItems.length) % sliderItems.length;
        nextSlide = sliderItems[nextSlideIndex];
        currentSlide.classList.add('slideOutRight');
        nextSlide.classList.add('slideInLeft','active');
      }
      nextSlide.onanimationend = () => {
        if(!clickable){
          currentSlide.className = 'slider-item';
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


export const makeSlider = (el) => {
  const slider = document.getElementById(el);
  const sliderStage = slider.querySelector('.slider-stage')
  const sliderItems = [...slider.querySelectorAll('.slider-item')];
  const navPrev = slider.querySelector('.nav-prev');
  const navNext = slider.querySelector('.nav-next');
  let currentIndex = 0;
  let clickable = true;

  const makeSlide = (numSlide) => {
    const singleSlideItemWidth = slider.offsetWidth / numSlide;
    console.log()
    sliderItems.forEach(slide => {
      slide.style.marginRight = '20px';
      slide.style.width = `${singleSlideItemWidth - 20}px`;
    });
    sliderStage.style.width = `${singleSlideItemWidth * sliderItems.length}px`;

    const changeSlide = (forward) => {
      if(!clickable) return;
      clickable = false;
      if(forward){
        if(currentIndex + numSlide >= sliderItems.length){
          clickable = true;
          return;
        } else {
          currentIndex++;
        }
        sliderStage.style.transform = `translateX(${-currentIndex * singleSlideItemWidth}px)`;
      } else {
        if(currentIndex === 0){
          clickable = true;
          return;
        } else {
          currentIndex--;
        }
        sliderStage.style.transform = `translateX(${-currentIndex * singleSlideItemWidth}px)`;
      }
    }

    sliderStage.ontransitionend = () => {
      clickable = true;
    }

    navPrev.onclick = () => {
      changeSlide(false);
    }

    navNext.onclick = () => {
      changeSlide(true);
    }
    
  }

  makeSlide(3)

  window.onresize = () => {
    if(window.innerWidth >= 930){
      makeSlide(3);
    } else if(window.innerWidth >= 640){
      makeSlide(2);
    } else {
      makeSlide(1);
    }
  }
}