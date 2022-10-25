function showMore () {
    const contentBlock = document.querySelector('.container');
    
    function showHide (buttonShow, buttonText, text, height) {
        let spoiler = buttonShow.previousElementSibling;
        let rotate = buttonShow.firstElementChild;
        spoiler.classList.toggle(height);
        buttonText.innerHTML = text;
        rotate.classList.toggle('rotate');
        }

    contentBlock.addEventListener('click', function(event) {
        let buttonShow = event.target.closest('.content-block__button-spoiler');
        let contentReadMore = event.target.closest('.content__read-more');
    
        if (buttonShow) {
            let buttonText = buttonShow.querySelector('.button-content__read-text');
            let text;
            let height = 'content-block--height';
            if (buttonText.innerHTML == 'Показать все') {
                text = 'Скрыть';
            }
            else {
                text = 'Показать все';
            }
            showHide(buttonShow, buttonText, text, height);
            return;
        }
    
        if (contentReadMore) {
            let text;
            let height ='content--height';
            let buttonText = contentReadMore.querySelector('.button-content__read-text');
            if (buttonText.innerHTML == 'Читать далее') {
                 text = 'Скрыть';
            }
            else {
                text = 'Читать далее';
            }
            showHide(contentReadMore, buttonText, text, height);
        }
            return;
        })
};

export default showMore;