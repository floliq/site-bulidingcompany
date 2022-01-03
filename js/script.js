$(".accordion").accordion({
  heightStyle: "content",
  active: true,
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".job__button").forEach(function (jobButton) {
    jobButton.addEventListener("click", (event) => {
      let activeButton = document.querySelector(".job__button-checked");
      activeButton.classList.remove("job__button-checked");
      let path = event.currentTarget.dataset.info;
      document
        .querySelector(`[data-info="${path}"]`)
        .classList.add("job__button-checked");
      document.querySelectorAll(".job-content").forEach(function (jobContent) {
        jobContent.classList.remove("job-content-active");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("job-content-active");
      document.querySelector(
        `[data-image="${path}"]`
      ).style.background = `url("img/job/${path}.jpg")`;
    });
  });
});

var menuBtn = document.querySelector(".menu__btn");
menuBtn.onclick = () => {
  menuBtn.classList.toggle("menu__btn-open");
  document
    .querySelector(".menu__burgerbar")
    .classList.toggle("menu__burgerbar-open");
};
