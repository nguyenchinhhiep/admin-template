import handleDropdowns from './dropdown';
import handleCollapse from './collapse';
import toggleSidebarHandler, {handleSidebarNav, handleSidebarOverlay, resizeScreenHandler} from './sidebar';
import OverlayScrollbars from 'overlayscrollbars';
import { handleCharts} from './charts';
import { handleFullscreen, handleSearchInMobileView } from './header';
import { makeSlideFullScreen1, makeSlideFullScreen2} from './slides';


window.onload = () => {
    const ScrollbarInstance = OverlayScrollbars(document.querySelector('.custom-scrollbar'), {});
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
    makeSlideFullScreen1('slideFullscreen1');
    makeSlideFullScreen2('slideFullscreen2');
}
