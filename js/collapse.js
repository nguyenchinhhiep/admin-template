window.onload = () => {
    const collapse = (target) => {
        if(!target.classList.contains('show')){
            return;
        }
        target.classList.remove('show');
    }
    
    const expand = (target) => {
        if(target.classList.contains('show')){
            return;
        }
        target.classList.add('show');
    }
    
    const toggleCollapse = (target) => {
        if(target.classList.contains('show')){
            collapse(target);
        } else {
            expand(target);
        }
    }
    document.addEventListener('click', (e) => {
       const collapseToggle = e.target.closest(".nav-link.collapse-toggle");
       if(!!collapseToggle){
           const parentNode = collapseToggle.parentNode;
           parentNode.classList.toggle('open');
           const collapseTarget = collapseToggle.dataset.target;
           if(!!collapseTarget){
            toggleCollapse(document.getElementById(collapseTarget));
           }
       }
    })
}


