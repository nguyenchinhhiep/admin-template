import OverlayScrollbars from 'overlayscrollbars';
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