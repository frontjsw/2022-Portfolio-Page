// content1 fixed 액션
window.addEventListener("scroll", () => {
  const con1Title = document.querySelector(".content1 .left_area");
  const con1TitleH = con1Title.clientHeight;
  const con1Top = document.querySelector(".content1").offsetTop;
  const con1Bot = document.querySelector(".content1").offsetBottom;
  const con1EndH = document.querySelector(".all_btn").offsetTop - con1TitleH;
  if (
    window.scrollY > con1Top &&
    window.scrollY < con1EndH &&
    window.innerWidth > 1100
  ) {
    con1Title.classList.add("on");
    con1Title.classList.remove("end");
  } else if (window.scrollY > con1EndH && window.innerWidth > 1100) {
    con1Title.classList.remove("on");
    con1Title.classList.add("end");
  } else {
    con1Title.classList.remove("on");
  }
});

var swiper = new Swiper(".interviewSwiper", {
  loop: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
