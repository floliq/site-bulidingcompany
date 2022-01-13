$(".accordion").accordion({
  heightStyle: "content",
  active: true,
  collapsible: true,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  let swiperButtons = document.querySelectorAll(".swiper-pagination-bullet");
  console.log(swiperButtons);
  for (let i = 0; i < swiperButtons.length; i++) {
    swiperButtons[i].setAttribute("aria-label", `Перейти на слайд ${i + 1}`);
  }
  document.querySelectorAll(".job__button").forEach(function (jobButton) {
    jobButton.addEventListener("click", (event) => {
      let activeButton = document.querySelector(".job__button-checked");
      activeButton.classList.remove("job__button-checked");
      activeButton.setAttribute("aria-current", "false");
      let path = event.currentTarget.dataset.info;
      document
        .querySelector(`[data-info="${path}"]`)
        .classList.add("job__button-checked");
      document
        .querySelector(`[data-info="${path}"]`)
        .setAttribute("aria-current", "true");
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
  if (window.innerWidth <= 1400) {
    document.querySelector(".menu__bar").setAttribute("aria-hidden", "true");
  }
});

var menuBtn = document.querySelector(".menu__btn");
menuBtn.onclick = () => {
  menuBtn.classList.toggle("menu__btn-open");
  document.querySelector(".menu__bar").classList.toggle("menu__bar-open");
  if (
    document.querySelector(".menu__bar").classList.contains("menu__bar-open")
  ) {
    document.querySelector(".menu__bar").setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
  } else {
    document.querySelector(".menu__bar").setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
  }
};

var menuSearch = document.querySelector(".menu-search");
menuSearch.addEventListener("click", () => {
  document.querySelector(".menu__form").classList.add("menu__form-active");
  menuSearch.style.pointerEvents = "none";
  menuSearch.style.opacity = "0";
  document
    .querySelector(".menu__form-active")
    .setAttribute("aria-hidden", "false");
});

document.querySelector(".menu__close").addEventListener("click", () => {
  document.querySelector(".menu__form").classList.remove("menu__form-active");
  menuSearch.style.pointerEvents = "auto";
  menuSearch.style.opacity = "1";
  document.querySelector(".menu__form").setAttribute("aria-hidden", "true");
});
