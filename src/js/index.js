import handleDropdowns from './dropdown';
import handleCollapse from './collapse';
import toggleSidebarHandler, {handleSidebarNav} from './sidebar';


window.onload = () => {
    window.onclick = (event) => {
        handleDropdowns(event);
        handleCollapse(event);
        handleSidebarNav(event);
    }
    toggleSidebarHandler();
}
