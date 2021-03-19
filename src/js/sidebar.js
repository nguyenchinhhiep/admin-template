import OverlayScrollbars from 'overlayscrollbars';
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

const toggleSidebarHandler = () => {
  const body = document.getElementsByTagName('BODY')[0];
	const scrollbarInstances = OverlayScrollbars(document.querySelector('.sidebar-nav'), {});
  const toggleSidebar = document.querySelector('.toggle-sidebar');
  toggleSidebar.addEventListener('click', (event) => {
  event.preventDefault();
  body.classList.toggle('sidebar-minimize');
  });
}

export default toggleSidebarHandler;