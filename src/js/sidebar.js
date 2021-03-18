import OverlayScrollbars from 'overlayscrollbars';
const toggleSidebarHandler = () => {
	const scrollbarInstances = OverlayScrollbars(document.querySelector('.sidebar-nav'), {});
  const toggleSidebar = document.querySelector('.toggle-sidebar');
  toggleSidebar.addEventListener('click', (event) => {
  event.preventDefault();
  const body = document.getElementsByTagName('BODY')[0];
  body.classList.toggle('sidebar-minimize');
  })
}

export default toggleSidebarHandler;