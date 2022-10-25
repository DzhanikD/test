function clickMenu () {
    const container = document.querySelector('.container');

    function menu () {
        let menu = container.querySelector('.menu');
        let opasity = container.querySelector('.container__opasity');
        let sideMenu = container.querySelector('.side-menu');
        menu.classList.toggle('menu--open');
        opasity.classList.toggle('container__opasity--open');
        sideMenu.classList.toggle('side-menu--open');
    }

    function opasity () {
        let menu = container.querySelector('.menu');
        let opasity = container.querySelector('.container__opasity');
        let sideMenu = container.querySelector('.side-menu');
        menu.classList.remove('menu--open');
        opasity.classList.remove('container__opasity--open');
        sideMenu.classList.remove('side-menu--open');
    }

    container.addEventListener('click', function(event) {
        let menuOpen = event.target.closest('.header__button-burger');
        let opasityMenu = event.target.closest('.container__opasity');
        if (menuOpen) {
            menu();
            return;
            }
    
        if (opasityMenu) {
            opasity()
            return;
            }
        }
        )  
}

export default clickMenu;