const swiperNews = new Swiper(".industry-news .swiper-container", {
  slidesPerView: 1,
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".industry-news .swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    765: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20
    },
    1300: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30
    }
  }
});
var swiper = new Swiper(".press-release .swiper-container", {
  direction: "vertical",
  pagination: {
    el: ".press-release .swiper-pagination",
    clickable: true,
    dynamicBullets: true
  }
});

const swiperBanner = new Swiper(".banner .swiper-container", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".banner .swiper-pagination",
    dynamicBullets: true,
    clickable: true
  }
});

const swiperExhibitor = new Swiper(".exhibitors .swiper-container", {
  slidesPerView: 'auto',
  speed: 2000,
  spaceBetween: 30,
  centeredSlides: true,
  // slidesPerGroup: 'auto',
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".exhibitors .swiper-button-next",
  //   prevEl: ".exhibitors .swiper-button-prev"
  // },
  // breakpoints: {
  //   426: {
  //     slidesPerView: 3,
  //     slidesPerGroup: 3
  //   },
  //   769: {
  //     slidesPerView: 6,
  //     slidesPerGroup: 6
  //   }
  // },
  // pagination: {
  //   el: ".exhibitors .swiper-pagination",
  //   dynamicBullets: true,
  //   clickable: true
  // }
});

const swiperPartner = new Swiper(".partners .swiper-container", {
  slidesPerView: 1,
  speed: 4000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false
  },
  initialSlide: 3,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  slidesPerGroup: 1,
  // navigation: {
  //   nextEl: ".partners .swiper-button-next",
  //   prevEl: ".partners .swiper-button-prev"
  // },
  // pagination: {
  //   el: ".partners .swiper-pagination",
  //   dynamicBullets: true,
  //   clickable: true
  // }
});
