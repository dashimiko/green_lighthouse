const swiper = new Swiper(".swiper", {
  slidesPerView: 1.2,
  loop: true,
  speed: 600,
  spaceBetween: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    978: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    769: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    }
  },
});

const menuLinks = document.querySelectorAll('.link[data-goto]');//пункты меню хедера
const navButton = document.querySelectorAll('.button');//кнопки
const burgerMenu = document.querySelector(".hamburger-menu");//икнока бургера
const burgerNavigation = document.querySelector(".header__navigation");//список пунктов меню хедера

//плавный скролл к якорю
function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

    //закрытие меню после клика на пункт меню
    if (burgerMenu.classList.contains('header__navigation_active')) {
      document.body.classList.remove('body_lock');
      burgerMenu.classList.remove('header__navigation_active');
      burgerNavigation.classList.remove('header__navigation_active');
    }

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth"
    });
      e.preventDefault();
  }
}

//открытие и закрытие модалки меню для мобильных разрешений
if (burgerMenu) {
  burgerMenu.addEventListener('click', () => {
    document.body.classList.toggle('body_lock');
    burgerMenu.classList.toggle('header__navigation_active');
    burgerNavigation.classList.toggle('header__navigation_active');
  })
}

//слушатель для скролла по клике на меню в хедере
if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
}
//слушатель для скролла по клику на кнопки
if(navButton.length > 0)
navButton.forEach(buttonLink => {
  buttonLink.addEventListener('click', onMenuLinkClick);
});
