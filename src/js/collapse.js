const collapse = (target, activeClass='show') => {
    if (!target.classList.contains(activeClass)) {
        return;
    }
    target.classList.remove(activeClass);
}

const expand = (target, activeClass='show') => {
    if (target.classList.contains(activeClass)) {
        return;
    }
    target.classList.add(activeClass);
}

export const toggleCollapse = (target, activeClass='show') => {
    if (target.classList.contains(activeClass)) {
        collapse(target, activeClass);
    } else {
        expand(target, activeClass);
    }
}

const handleCollapse = (event) => {
    const target = event.target;
    const collapseToggle = target.closest('.collapse-toggle');
    if(!!collapseToggle){
        const parentNode = collapseToggle.parentNode;
        if (!parentNode.classList.contains('open')) {
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

