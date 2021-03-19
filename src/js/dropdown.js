import { toggleCollapse } from './collapse';



const toggleDropdown = toggleCollapse;
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const closeDropdowns = () => {
    Array.from(dropdownToggles).forEach(dropdownToggle => {
        const dropdownTargetId = dropdownToggle.dataset.target;
        const dropdownTarget = document.getElementById(dropdownTargetId);
        if (!!dropdownTarget) {
            dropdownTarget.classList.remove('show');
        }
        dropdownToggle.classList.remove('show');
        dropdownToggle.setAttribute('aria-expanded', 'false');
    })
}

const handleDropdowns = (event) => {
    const target = event.target;
    const dropdownToggle = target.closest('.dropdown-toggle');
    if(!!dropdownToggle){
        const dropdownTargetId = dropdownToggle.dataset.target;
        const dropdownTarget = document.getElementById(dropdownTargetId);
        if (!!dropdownTarget) {
            if (dropdownToggle.classList.contains('show')) {
                dropdownToggle.setAttribute('aria-expanded', 'false');
                dropdownToggle.classList.remove('show');
            } else {
                closeDropdowns();
                dropdownToggle.setAttribute('aria-expanded', 'true');
                dropdownToggle.classList.add('show');
            }
            toggleDropdown(dropdownTarget);
        }
    } else {
        closeDropdowns();
    }
}

export default handleDropdowns;
