import {toggleCollapse} from './collapse';

const navLinkToggles = document.querySelectorAll('.nav-link-toggle');
const closeAllCollapse = () => {
    Array.from(navLinkToggles).forEach(collapse => {
        const parentNode = collapse.parentNode;
        const collapseTargetId = collapse.dataset.target;
        const collapseTarget = document.getElementById(collapseTargetId);
        parentNode.classList.remove('open');
        if (!!collapseTarget) {
            collapseTarget.classList.remove('show');
        }
        collapse.setAttribute('aria-expanded', 'false');
    })
}
export const handleSidebarNav = (event) => {
  const target = event.target;
  const navLinkToggle = target.closest('.nav-link-toggle');
  if(!!navLinkToggle){
      const parentNode = navLinkToggle.parentNode;
      if(!parentNode.classList.contains('open')){
        closeAllCollapse();
        navLinkToggle.setAttribute('aria-expanded', 'true');
        parentNode.classList.add('open');
      } else {
        navLinkToggle.setAttribute('aria-expanded', 'false');
        parentNode.classList.remove('open');
      }
      const collapseTargetId = navLinkToggle.dataset.target;
      const collapseTarget = document.getElementById(collapseTargetId);
      if(collapseTarget){
        toggleCollapse(collapseTarget);
      }
  }

}

let mql = window.matchMedia('(max-width: 991px)');
const body = document.getElementsByTagName('BODY')[0];
const toggleSidebar = document.querySelector('.toggle-sidebar');
const toggleSidebarHandler = () => {
  toggleSidebar.addEventListener('click', (event) => {
    event.preventDefault();
    if (mql.matches) {
      if (body.classList.contains('sidebar-minized')) {
        body.classList.remove('sidebar-minimized');
      };
      body.classList.toggle('sidebar-open');
    } else {
      body.classList.toggle('sidebar-minimized');
    }
  });
}

export const resizeScreenHandler = () => {
  mql.addEventListener('change', (event) => {
    if(event.matches){
      body.classList.remove('sidebar-minimized');
    } else {
      body.classList.remove('sidebar-open');
    }
  })
};

export const handleSidebarOverlay = (event) => {
  const target = event.target;
  if(target.classList.contains('sidebar-overlay')){
    body.classList.remove('sidebar-open');
  }
} 


export default toggleSidebarHandler;