function keyboardEvent () {
    const container = document.querySelector('.container');
    document.addEventListener('keyup', function(event) {
    if (event.code === 'Escape') {
        let menu = container.querySelector('.menu');
        let opasity = container.querySelector('.container__opasity');
        let sideMenu = container.querySelector('.side-menu');
        menu.classList.remove('menu--open');
        opasity.classList.remove('container__opasity--open');
        sideMenu.classList.remove('side-menu--open');
        let modal;
        if (modal = container.querySelector('.modal--open')) {
        let opasity2 = modal.querySelector('.modal__opasity');
        let modalFeedbackWrapper = modal.querySelector('.modal__wrapper');
        opasity2.classList.remove('container__opasity--open');
        modalFeedbackWrapper.classList.remove('modal__wrapper--open');
        modal.classList.remove('modal--open')
        }
    }
   })
}

export default keyboardEvent;