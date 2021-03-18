import handleDropdowns from './dropdown';
import handleCollapse from './collapse';
import toggleSidebarHandler from './sidebar';


window.onload = () => {
    window.onclick = (event) => {
        handleDropdowns(event);
        handleCollapse(event);
    }
    toggleSidebarHandler();
}
