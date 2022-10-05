
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

const contentBlock = document.querySelector('.content-block');

function show(buttonShow) {
  let spoiler = buttonShow.previousElementSibling;
  spoiler.classList.remove('height');
  let buttonHidden = buttonShow.nextElementSibling;
  buttonHidden.classList.remove('hidden');
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
  let buttonShow = buttonHidden.previousElementSibling;
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




 





