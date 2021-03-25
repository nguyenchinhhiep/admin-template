/* Get the documentElement (<html>) to display the page in fullscreen */
const  elem = document.documentElement;

/* View in fullscreen */
const openFullscreen = () => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
const closeFullscreen = () => {
  if (document.fullscreenElement !== null) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }
  
}

// Handle Fullscreen
export const handleFullscreen = (event) => {
  const target = event.target;
  const toggleFullscreen = target.closest('.navbar-fullscreen > a');
  if(!!toggleFullscreen){
    const isFullscreen = toggleFullscreen.querySelector('.bx').classList.contains('bx-exit-fullscreen');
    if(isFullscreen){
      closeFullscreen();
    } else {
      openFullscreen();
    }
    toggleFullscreen.querySelector('.bx').classList.toggle('bx-fullscreen');
    toggleFullscreen.querySelector('.bx').classList.toggle('bx-exit-fullscreen');
  }
}

export const handleSearchInMobileView = (event) => {
  const target = event.target;
  const searchIcon = target.closest('.header-search-icon a');
  const cancelSearchIcon = target.closest('.navbar-search-button .bx-arrow-back');
  if(!!searchIcon){
    document.querySelector('.navbar-search').classList.add('mobile-view');
    document.getElementById('search-nav').focus();
  }

  if(!!cancelSearchIcon){
    document.querySelector('.navbar-search').classList.remove('mobile-view');
    document.getElementById('search-nav').value = '';
  }
}