function keyboardEvent () {
    const container = document.querySelector('.container');
    document.addEventListener('keyup', function(event) {
    if (event.code === 'Escape') {
        let menu = container.querySelector('.menu');
        let opasity = container.querySelector('.opasity');
        let sideMenu = container.querySelector('.side-menu');
        menu.classList.remove('menu--open');
        opasity.classList.remove('opasity--open');
        sideMenu.classList.remove('side-menu--open');

        let modalOpen = container.querySelector('.modal--open');
        let opasity2 = modalOpen.querySelector('.modal__opasity');
        let modalFeedbackWrapper = modalOpen.querySelector('.modal__wrapper');
        opasity2.classList.remove('opasity--open');
        modalFeedbackWrapper.classList.remove('modal__wrapper--open');
        modalOpen.classList.remove('modal--open');
    }
   })

}

export default keyboardEvent;