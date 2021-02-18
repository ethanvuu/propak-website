const closeIconURL = "images/aboutTheShow/closeIcon.png";
const openIconURL = "images/aboutTheShow/openIcon.png";

const article1 = document.querySelector(".article-container.article-1 .header");
const content1 = document.querySelector(
  ".article-container.article-1 .content"
);
const trigger1 = document.querySelector(
  ".article-container.article-1 .trigger"
);
const icon1 = document.querySelector(
  ".article-container.article-1 .trigger img"
);

const article2 = document.querySelector(".article-container.article-2 .header");
const content2 = document.querySelector(
  ".article-container.article-2 .content"
);
const trigger2 = document.querySelector(
  ".article-container.article-2 .trigger"
);
const icon2 = document.querySelector(
  ".article-container.article-2 .trigger img"
);

const article3 = document.querySelector(".article-container.article-3 .header");
const content3 = document.querySelector(
  ".article-container.article-3 .content"
);
const trigger3 = document.querySelector(
  ".article-container.article-3 .trigger"
);
const icon3 = document.querySelector(
  ".article-container.article-3 .trigger img"
);

const article4 = document.querySelector(".article-container.article-4 .header");
const content4 = document.querySelector(
  ".article-container.article-4 .content"
);
const trigger4 = document.querySelector(
  ".article-container.article-4 .trigger"
);
const icon4 = document.querySelector(
  ".article-container.article-4 .trigger img"
);

let currentOpening = content1;
let currentOpeningIcon = icon1;
let currentArticle = article1;

collapseSection = (element, icon, article) => {
  if (!element || !icon || !article) {
    return;
  }
  const sectionHeight = element.scrollHeight;
  const elementTransition = element.style.transition;
  element.style.transition = "";
  requestAnimationFrame(function() {
    window.scrollTo({ top: 0 });
    element.style.height = sectionHeight + "px";
    element.style.transition = elementTransition;   
    requestAnimationFrame(function() {
      element.style.height = 0 + "px";
      document.body.scrollTop = 0;
    });
  });
 
  // window.scrollTo({ top: article.getBoundingClientRect().top - 150 });
  icon.src = openIconURL;
  element.setAttribute("data-collapsed", "true");
};

expandSection = (element, icon, article) => {
  if (!element || !icon || !article) {
    return;
  }
  requestAnimationFrame(function() {
  });
  const sectionHeight = element.scrollHeight;
  element.style.height = sectionHeight + "px";
  icon.src = closeIconURL;
  element.setAttribute("data-collapsed", "false");
  
  // window.scrollTo({ top: article.getBoundingClientRect().top - 100});

};

toggleSection = (element, icon, article) => {
  const isCollapsed = element.getAttribute("data-collapsed") === "true";
  if (isCollapsed) {
    collapseSection(currentOpening, currentOpeningIcon, currentArticle);
    if ((currentOpening, currentOpeningIcon)) {
      setTimeout(() => {
        expandSection(element, icon, article);
      }, 450);
    } else {
      expandSection(element, icon, article);
    }
    currentOpening = element;
    currentOpeningIcon = icon;
    currentArticle = article;
  } else {
    currentOpening = undefined;
    currentOpeningIcon = undefined;
    currentArticle = undefined;
    collapseSection(element, icon, article);
  }
};

article1.addEventListener("click", () => {
  toggleSection(content1, icon1, article1);
});

trigger1.addEventListener("click", () => {
  toggleSection(content1, icon1, article1);
});

article2.addEventListener("click", () => {
  toggleSection(content2, icon2, article2);
});

trigger2.addEventListener("click", () => {
  toggleSection(content2, icon2, article2);
});

article3.addEventListener("click", () => {
  toggleSection(content3, icon3, article3);
});

trigger3.addEventListener("click", () => {
  toggleSection(content3, icon3, article3);
});

article4.addEventListener("click", () => {
  toggleSection(content4, icon4, article4);
});

trigger4.addEventListener("click", () => {
  toggleSection(content4, icon4, article4);
});
