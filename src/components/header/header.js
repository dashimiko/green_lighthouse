
const menuLinks = document.querySelectorAll('.header__list-link[data-goto]');//пункты меню хедера
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

//добавление класса активному блоку меню при скролле
/*window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.header__navigation').clientHeight <= scrollDistance) {
				document.querySelectorAll('.header__navigation a').forEach((el) => {
            if (el.classList.contains('header__list-link_active')) {
              el.classList.remove('header__list-link_active');
            }
				});
				document.querySelectorAll('.header__navigation li')[i].querySelector('a').classList.add('header__list-link_active');
			}
		});
	}
});*/
