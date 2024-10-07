// Testimonial slider
let swiper = new Swiper(".swiper", {
  slidesPerView: 1, // Default to 1 slide per view
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1280: {
      slidesPerView: 1,
    },
  },
});
// menu
const menu = document.querySelectorAll(".menu")[0];
const menuIcon = document.querySelectorAll(".open-menu")[0];
const menuCloseBtn = document.querySelectorAll(".close-menu")[0];

//menu button handle
menuIcon.addEventListener("click", () => {
  menu.style.display = "block";
  menuIcon.style.display = "none";
  menuCloseBtn.style.display = "block";
});
menuCloseBtn.addEventListener("click", () => {
  menu.style.display = "none";
  menuCloseBtn.style.display = "none";
  menuIcon.style.display = "block";
});

// on window resize
function handleWindowSizeChange() {
  const windowWidth = window.innerWidth;

  if (windowWidth > 1024) {
    menu.style.display = "block";

    menuCloseBtn.style.display = "none";
    menuIcon.style.display = "none";
  } else {
    menuIcon.style.display = "block";
    menu.style.display = "none";
  }
}

// on window resize
window.addEventListener("resize", handleWindowSizeChange);

handleWindowSizeChange();



