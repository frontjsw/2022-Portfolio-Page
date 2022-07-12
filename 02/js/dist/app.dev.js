"use strict";

var site = document.querySelector(".site");
var siteTitle = document.querySelector(".site .tit");
siteTitle.addEventListener("click", function () {
  site.classList.toggle("on");
});
var swiper = new Swiper(".designSwiper", {
  slidesPerView: 3,
  spaceBetween: 30
});
var cate = document.querySelectorAll(".cate .cate_list");
var designSwiper = document.querySelectorAll(".designSwiper");
cate.forEach(function (el, index) {
  el.addEventListener("click", function (e) {
    for (i = 0; i < cate.length; i++) {
      cate[i].classList.remove("on");
      designSwiper[i].classList.remove("on");
    }

    cate[index].classList.add("on");
    designSwiper[index].classList.add("on");
  });
});