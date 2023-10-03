const arrowScrollLeft = () => {
    let left = document.querySelector(".scroll-divs")
    left.scrollBy(-350, 0)
}   

const arrowScrollRight = () => {
  let right = document.querySelector(".scroll-divs");
  right.scrollBy(300, 0);
};   

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});