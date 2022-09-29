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

const brand = document.querySelector('.button-read');
const brandOpen = document.querySelector('.brand'); 
const buttonShow = document.querySelector('.button-show')
const showAll = document.querySelector('.content-block__show-all')
showAll.addEventListener('click', function() {
  brandOpen.classList.add('brand-open');
  buttonShow.classList.add('button-hidden');
  showAll.classList.add('show-all');
})

buttonShow.addEventListener('click', function() {
  brandOpen.classList.remove('brand-open');
  buttonShow.classList.remove('button-hidden');
  showAll.classList.remove('show-all')
})








