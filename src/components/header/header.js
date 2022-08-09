//плавный скролл к якорю
const menuLinks = document.querySelectorAll('.header__list-link[data-goto]');

if(menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      //закрытие меню после клика на пункт меню
      if (burgerMenu.classList.contains('header__navigation_active')){
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
}

//открытие и закрытие модалки меню для мобильных разрешений
const burgerMenu = document.querySelector(".hamburger-menu");
const burgerNavigation = document.querySelector(".header__navigation");

if (burgerMenu) {
  burgerMenu.addEventListener('click', () => {
    document.body.classList.toggle('body_lock');
    burgerMenu.classList.toggle('header__navigation_active');
    burgerNavigation.classList.toggle('header__navigation_active');
  })
}

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
