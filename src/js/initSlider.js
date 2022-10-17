function initSlider () {
  const slider = document.querySelector('.swiper');
  const slider2 = document.querySelector('.swiper2');
  const slider3 = document.querySelector('.swiper3');
  let mySwiper;
  let mySwiper2;
  let mySwiper3;
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

      mySwiper2 = new Swiper(slider2, {
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

      mySwiper3 = new Swiper(slider3, {
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
    }

    if (window.innerWidth >= 768) {
      slider.dataset.mobile = 'false';
      if (slider.classList.contains('swiper-initialized')) {
        mySwiper.destroy();
        mySwiper2.destroy();
        mySwiper3.destroy();
      }
    }
  }
  mobileSlider();
  window.addEventListener('resize', mobileSlider);
}

export default initSlider;