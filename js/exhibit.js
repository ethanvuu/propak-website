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

const swiperTestimonials = new Swiper(
  ".testimonials .swiper-container.order-1",
  {
    slidesPerView: 1,
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".testimonials  .swiper-container.order-1 .swiper-pagination",
      dynamicBullets: true,
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      765: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1025: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30
      }
    }
  }
);

const swiperTestimonials2 = new Swiper(
  ".testimonials .swiper-container.order-2",
  {
    slidesPerView: 1,
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".testimonials .swiper-container.order-2 .swiper-pagination",
      dynamicBullets: true,
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      765: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1025: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30
      }
    }
  }
);
