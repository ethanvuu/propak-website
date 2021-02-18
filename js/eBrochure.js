const previous = document.querySelector(".e-brochure .navigator .previous");
const next = document.querySelector(".e-brochure .navigator .next");

previous.addEventListener("click", () => {
  swiperAllNews.slidePrev();
});

next.addEventListener("click", () => {
  swiperAllNews.slideNext();
});

var swiperAllNews = new Swiper(".e-brochure .swiper-container", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerColumn: 2,
      spaceBetween: 20
    },
    765: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 20
    }
  },
  on: {
    slideChange: () => {
      if (swiperAllNews.isBeginning) {
        previous.classList.add("none");
        next.classList.remove("none");
      } else if (swiperAllNews.isEnd) {
        previous.classList.remove("none");
        previous.classList.add("alone");
        next.classList.add("none");
      } else {
        next.classList.remove("none");
        previous.classList.remove("alone");
        previous.classList.remove("none");
      }
    }
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
