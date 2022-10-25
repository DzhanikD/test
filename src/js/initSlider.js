function initSlider () {
  const sliders = document.querySelectorAll('.content-block__swiper');

  let mySwipers = [] // Масив со слайдерами

  function sliderinit() {
    // Создаем все слайдеры
    sliders.forEach((slider, index) => {
      if (!slider.swiper) {
        mySwipers[index] = new Swiper(slider, {
          direction: 'horizontal',
          loop: false,
          // If we need pagination
          pagination: {
          el: '.swiper-pagination',
          clickable: true,
          },
          slidesPerView: 'auto',
          spaceBetween: 16
          })    
        }  
      else {
        return
      }
    })
  }

  function sliderDestroy() {
    // удаляем все слайдеры 
    sliders.forEach((slider, index) => {
      if (slider.swiper) mySwipers[index].destroy(true, true)
    })

  }
  function checker() {
    // >768 удаялем, в другом случа инициализируем, если до этого не инициализировали
    if (window.matchMedia("(min-width: 768px)").matches) {
      // >768 удаляем слайдеры если такие есть
      sliderDestroy()
    } else {
      sliderinit()
    }
  }

  checker();
  window.addEventListener('resize', () => {
    checker();
  });
}

export default initSlider;