function clickButton  () {
    const container = document.querySelector('.container');

    function menu () {
        let menu = container.querySelector('.menu');
        let opasity = container.querySelector('.opasity');
        let sideMenu = container.querySelector('.side-menu');
        menu.classList.toggle('menu--open');
        opasity.classList.toggle('opasity--open');
        sideMenu.classList.toggle('side-menu--open');
    }

    function modalFeedback () {
        let feedback = container.querySelector('.modal-feedback');
        let opasity = feedback.querySelector('.modal__opasity');
        let modalFeedbackWrapper = feedback.querySelector('.modal__wrapper');
        feedback.classList.toggle('modal--open');
        opasity.classList.toggle('opasity--open');
        modalFeedbackWrapper.classList.toggle('modal__wrapper--open');
    }

    function modalCall () {
        let call = container.querySelector('.modal-call');
        let opasity = call.querySelector('.modal__opasity');
        let modalCallWrapper = call.querySelector('.modal__wrapper');
        call.classList.toggle('modal--open');
        opasity.classList.toggle('opasity--open');
        modalCallWrapper.classList.toggle('modal__wrapper--open');
    }

    function opasity () {
        let menu = container.querySelector('.menu');
        let opasity = container.querySelector('.opasity');
        let sideMenu = container.querySelector('.side-menu');
        menu.classList.remove('menu--open');
        opasity.classList.remove('opasity--open');
        sideMenu.classList.remove('side-menu--open');
    }

    function opasityModalClick () {
        let modalOpen = container.querySelector('.modal--open');
        let opasity = modalOpen.querySelector('.modal__opasity');
        let modalFeedbackWrapper = modalOpen.querySelector('.modal__wrapper');

        opasity.classList.remove('opasity--open');
        modalFeedbackWrapper.classList.remove('modal__wrapper--open');
        modalOpen.classList.remove('modal--open');
    }

    container.addEventListener('click', function(event) {
    let menuOpen = event.target.closest('.header__button-burger');
    let modalFeedbackOpen = event.target.closest('.button-feedback');
    let modalCallOpen = event.target.closest('.button-call');
    let opasityMenu = event.target.closest('.opasity');
    let opasityModal = event.target.closest('.modal__opasity');
    
    if (menuOpen) {
        menu();
        }

    if (modalFeedbackOpen) {
            modalFeedback();
        }

    if (modalCallOpen) {
            modalCall();
        }
    
    if (opasityMenu) {
            opasity()
        }

    if (opasityModal) {
            opasityModalClick()
        }
    }
    )
}
 export default clickButton;