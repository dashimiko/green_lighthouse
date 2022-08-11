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



/*const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 600,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    978: {
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    769: {
      spaceBetween: 52,
      slidesPerGroup: 1.5,
    },
    320: {
      spaceBetween: 15,
      slidesPerGroup: 1.2,
    }
  },
});*/

