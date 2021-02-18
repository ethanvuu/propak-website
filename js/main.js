const menuTrigger = document.querySelector(".menu-trigger");
const closeMenuTrigger = document.querySelector(".close-trigger");
const mobileMenu = document.querySelector(".mobile-nav");
const desktopMenu = document.querySelectorAll(
  ".desktop-nav .nav-item-container .nav-item"
);
const desktopSubMenus = document.querySelectorAll(
  ".desktop-nav .sub-menu-container"
);
const mobileSubMenusTriggers = document.querySelectorAll(
  ".mobile-nav .nav-item-container"
);
const sections = document.querySelector(".content-wrapper");

//Toggle navbar submenu desktop
let previousNav, previousSub, previousMobileNav;

/**DESKTOP SUBMENU TOGGLE-UNCOMMENT IF NEEDED */
// desktopMenu.forEach((a, i) => {
//   a.addEventListener("click", () => {
//     if (previousNav) {
//       if (previousNav != a) {
//         previousNav.classList.remove("active");
//         desktopSubMenus[previousSub].classList.remove("active");
//         a.classList.add("active");
//         desktopSubMenus[i].classList.add("active");
//       } else {
//         if (a.classList.contains("active")) {
//           a.classList.remove("active");
//           desktopSubMenus[i].classList.remove("active");
//         } else {
//           a.classList.add("active");
//           desktopSubMenus[i].classList.add("active");
//         }
//       }
//     } else {
//       a.classList.add("active");
//       desktopSubMenus[i].classList.add("active");
//     }
//     previousNav = a;
//     previousSub = i;
//   });
// });
//Toggle navbar submenu mobile
mobileSubMenusTriggers.forEach((a, i) => {
  a.addEventListener("click", () => {
    if (previousMobileNav) {
      if (previousMobileNav != a) {
        previousMobileNav.classList.remove("active");
        a.classList.add("active");
      } else {
        if (a.classList.contains("active")) {
          a.classList.remove("active");
        } else {
          a.classList.add("active");
        }
      }
    } else {
      a.classList.add("active");
    }
    previousMobileNav = a;
  });
});
//Listen for toggle mobile navbar
menuTrigger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});
closeMenuTrigger.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
//Listen for closing mobile navbar
sections.addEventListener("click", () => {
  if (mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
  }
});
