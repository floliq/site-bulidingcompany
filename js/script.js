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
  document.querySelector(".menu__bar").classList.toggle("menu__bar-open");
};

var menuSearch = document.querySelector(".menu-search");
menuSearch.addEventListener("click", () => {
  document.querySelector(".menu__form").classList.add("menu__form-active");
  menuSearch.style.pointerEvents = "none";
  menuSearch.style.opacity = "0";
});

document.querySelector(".menu__close").addEventListener("click", () => {
  document.querySelector(".menu__form").classList.remove("menu__form-active");
  menuSearch.style.pointerEvents = "auto";
  menuSearch.style.opacity = "1";
});
