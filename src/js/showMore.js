function showMore () {
    const contentBlock = document.querySelector('.container');

    function show(buttonShow, buttonText) {
    let spoiler = buttonShow.previousElementSibling;
    let rotate = buttonShow.firstElementChild;
    spoiler.classList.toggle('height');
    buttonText.innerHTML = 'Скрыть';
    rotate.classList.toggle('rotate');
    };

    function hidden(buttonShow, buttonText) {
    let spoiler = buttonShow.previousElementSibling;
    let rotate = buttonShow.firstElementChild;
    spoiler.classList.toggle('height');
    buttonText.innerHTML = 'Показать все';
    rotate.classList.toggle('rotate');
    };

    function showText(contentReadMore, buttonText) {
    let spoiler = contentReadMore.previousElementSibling;
    let rotate = contentReadMore.firstElementChild;
    spoiler.classList.toggle('height-text');
    rotate.classList.toggle('rotate');
    buttonText.innerHTML = 'Скрыть';
    }

    function hiddenText(contentReadMore, buttonText) {
    let spoiler = contentReadMore.previousElementSibling;
    let rotate = contentReadMore.firstElementChild;
    spoiler.classList.toggle('height-text');
    rotate.classList.toggle('rotate');
    buttonText.innerHTML = 'Читать далее';
    }

    contentBlock.addEventListener('click', function(event) {
    let buttonShow = event.target.closest('.button-spoiler');
    let contentReadMore = event.target.closest('.content__read-more');
    if (buttonShow) {
        let buttonText = buttonShow.querySelector('.button-content__read-text');
        if (buttonText.innerHTML == 'Показать все') {
        show(buttonShow, buttonText);
        }
        else {
        hidden(buttonShow, buttonText);
        }
    }
    if (contentReadMore) {
        let buttonText = contentReadMore.querySelector('.button-content__read-text');
        if (buttonText.innerHTML == 'Читать далее') {
        showText(contentReadMore, buttonText);
        }
        else {
        hiddenText(contentReadMore, buttonText);
        }
    }
        return;
    })
    
};

export default showMore;