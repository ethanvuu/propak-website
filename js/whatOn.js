
const swiperWhatonsTop = new Swiper(".what-on-sub .top .swiper-container", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".what-on-sub .top .swiper-pagination",
    clickable: true,
    dynamicBullets: true
  }
});

const swiperWhatonsBot = new Swiper(".what-on-sub .bot .swiper-container", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".what-on-sub .bot .swiper-pagination",
    clickable: true,
    dynamicBullets: true
  }
});

var swiper = new Swiper(".what-on-sub-wrapper .press-release .swiper-container", {
  direction: "vertical",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".what-on-sub-wrapper .press-release .swiper-pagination",
    clickable: true,
    dynamicBullets: true
  }
});

const swiperNews = new Swiper('.what-on-sub-wrapper .events-news .swiper-container', {
    slidesPerView: 1,
    loop:true,
    speed: 1200,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.what-on-sub-wrapper .events-news .swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      0:{
        slidesPerView: 1,
        spaceBetween: 30,
      },
      765:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    }
  });