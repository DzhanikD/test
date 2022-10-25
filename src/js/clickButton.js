function clickButton  () {
    const container = document.querySelector('.container');

    function toogleModal(classModal) {
        let modal = container.querySelector(classModal);
        let opasity = modal.querySelector('.modal__opasity');
        let modalWrapper = modal.querySelector('.modal__wrapper');
        modal.classList.toggle('modal--open');
        opasity.classList.toggle('container__opasity--open');
        modalWrapper.classList.toggle('modal__wrapper--open');
        modal.querySelector('.modal__input').focus();
    }

    function opasityModalClick () {
        let modalOpen = container.querySelector('.modal--open');
        let opasity = modalOpen.querySelector('.modal__opasity');
        let modalFeedbackWrapper = modalOpen.querySelector('.modal__wrapper');
        opasity.classList.remove('container__opasity--open');
        modalFeedbackWrapper.classList.remove('modal__wrapper--open');
        modalOpen.classList.remove('modal--open');
    }

    container.addEventListener('click', function(event) {
    let modalOpen = event.target.closest('.button-modal');
    let opasityModal = event.target.closest('.modal__opasity');
    if (modalOpen) {
            toogleModal(modalOpen.dataset.modal);
            return;
        }
        
    if (opasityModal) {
            opasityModalClick()
            return;
        }
    }
    )
}

export default clickButton;