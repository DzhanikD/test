/*document.addEventListener('click', (event) => {
  
  
  if ( event.target.closest('.show-more') ) {


    return;
  }


})
*/



const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      direction: 'horizontal',
      loop: false,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    
        slidesPerView: 'auto',
        spaceBetween: 16
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }

  }
}

mobileSlider();

window.addEventListener('resize', mobileSlider);


/*сonst brandOpen = document.querySelector('.brand'); 
const buttonShow = document.querySelector('.content-block__button--hidden');
const showAll = document.querySelector('.content-block__button--show-all');
const buttons = document.querySelectorAll('.button-show');
const swiper = document.querySelector('.swiper');

const buttonHiden = document.querySelector('.button-hidden')*/
const contentBlock = document.querySelector('.content-block');

function show(buttonShow) {
  let spoiler = buttonShow.previousElementSibling;
  spoiler.classList.remove('height');
  let parent = buttonShow.parentElement;
  let buttonHide = parent.querySelector('.button-hidden');
  buttonHide.classList.remove('hidden');
  buttonShow.classList.add('hidden');
}

contentBlock.addEventListener('click', function(event) {
  let buttonShow = event.target.closest('.button-show');
    if (buttonShow) {
      show(buttonShow);
    }
    return;
})

function hidden(buttonHidden) {
  let parent = buttonHidden.parentElement;
  let buttonShow = parent.querySelector('.button-show');
  let spoiler = buttonShow.previousElementSibling;
  spoiler.classList.add('height');
  buttonShow.classList.remove('hidden');
  buttonHidden.classList.add('hidden');
}

contentBlock.addEventListener('click', function(event){
  let buttonHidden = event.target.closest('.button-hidden');
  if(buttonHidden) {
    hidden(buttonHidden);
  }
  return;
})

/*showAll.addEventListener('click', function() {
  brandOpen.classList.add('brand-height');
  buttonShow.classList.add('show');
  showAll.classList.add('hidden');
})

buttonShow.classList.add('show');
    event.stopPropagation()

buttonShow.addEventListener('click', function() {
  brandOpen.classList.remove('brand-height');
  buttonShow.classList.remove('show');
  showAll.classList.remove('hidden')
})*/




 





