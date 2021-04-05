export const makeSlideFullScreen = (el) => {
  const slide = document.getElementById(el);
  const slideList = slide.querySelectorAll('.slide-item');
  const navPrev = slide.querySelector('.nav-prev');
  const navNext = slide.querySelector('.nav-next');
  const dots = slide.querySelector('.slide-dots');
  let currentIndex = 0;

  const changeSlide = (dir) => {
    if(dir === 'next'){
      if(currentIndex < slideList.length - 1){
        currentIndex++;
      } else {
        currentIndex = 0;
      }
    } else {
      if(currentIndex > 0){
        currentIndex--;
      } else {
        currentIndex = slideList.length - 1;
      }
    }
  
    const currentSlide = slideList[currentIndex];
    currentSlide.onanimationend = () => {
      console.log('animation end');
      if(currentSlide.classList.contains('is-showing')){
        currentSlide.classList.remove('is-showing');
      }
      if(currentSlide.classList.contains('is-hiding')){
        currentSlide.classList.remove('is-hiding');
      }
    }
    currentSlide.classList.add('active');
  }
  navPrev.onclick = () => {
    changeSlide('next');
  }
  navNext.onclick = () => {
    changeSlide('prev');
  }
  
}





