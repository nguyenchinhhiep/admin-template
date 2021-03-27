import handleDropdowns from './dropdown';
import handleCollapse from './collapse';
import toggleSidebarHandler, {handleSidebarNav, handleSidebarOverlay, resizeScreenHandler} from './sidebar';
import OverlayScrollbars from 'overlayscrollbars';
import { handleCharts} from './charts';
import { handleFullscreen, handleSearchInMobileView } from './header';


window.onload = () => {
    const sidebarScrollbarInstance = OverlayScrollbars(document.querySelector('.sidebar-nav'), {});
    const notificationListScrollbarInstance = OverlayScrollbars(document.querySelector('.notification-list'), {});
    const tableContainerScrollbarInstance = OverlayScrollbars(document.querySelector('.table-container'), {});
    window.onclick = (event) => {
        handleDropdowns(event);
        handleCollapse(event);
        handleSidebarNav(event);
        handleSidebarOverlay(event);
        handleFullscreen(event);
        handleSearchInMobileView(event);
    }
    toggleSidebarHandler();
    resizeScreenHandler();
    handleCharts();
}
