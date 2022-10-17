const container = document.querySelector('.container');

function menu() {
    // let menu = container.querySelector('.menu');
    // menu.classList.toggle('menu--open');
    console.log('клик!');
}
//     // let menu = container.querySelector('.menu');
//     // let opasity = container.querySelector('.opasity');
//     // menu.classList.toggle('menu--open');
//     // opasity.classList.toggle('opasity--open');
// 
container.addEventListener('click', function(event) {
   let menuOpen = event.target.closest('.header__button-burger');
    if (menuOpen) {
       menu();
    }
 }
 )