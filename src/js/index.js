import handleDropdowns from './dropdown';
import handleCollapse from './collapse';
window.onclick = (event) => {
    handleDropdowns(event);
    handleCollapse(event);
}