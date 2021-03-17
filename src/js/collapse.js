const collapse = (target) => {
    if (!target.classList.contains('show')) {
        return;
    }
    target.classList.remove('show');
}

const expand = (target) => {
    if (target.classList.contains('show')) {
        return;
    }
    target.classList.add('show');
}

const toggleCollapse = (target) => {
    if (target.classList.contains('show')) {
        collapse(target);
    } else {
        expand(target);
    }
}

const collapseToggles = document.querySelectorAll('.nav-link.collapse-toggle');
const closeAllCollapse = () => {
    Array.from(collapseToggles).forEach(collapse => {
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

const handleCollapse = (event) => {
    const target = event.target;
    const collapseToggle = target.closest('.nav-link.collapse-toggle');
    if(!!collapseToggle){
        const parentNode = collapseToggle.parentNode;
        if (!parentNode.classList.contains('open')) {
            closeAllCollapse();
            collapseToggle.setAttribute('aria-expanded', 'true');
            parentNode.classList.add('open');
        } else {
            collapseToggle.setAttribute('aria-expanded', 'false');
            parentNode.classList.remove('open');
        }
        const collapseTargetId = collapseToggle.dataset.target;
        const collapseTarget = document.getElementById(collapseTargetId);
        if (!!collapseTarget) {
            toggleCollapse(collapseTarget);
        }
    }
}

export default handleCollapse;

