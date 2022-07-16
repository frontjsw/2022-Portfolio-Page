const site = document.querySelector(".site");
const siteTitle = document.querySelector(".site .tit");

siteTitle.addEventListener("click", () => {
  site.classList.toggle("on");
});

var swiper = new Swiper(".designSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
});

const cate = document.querySelectorAll(".cate .cate_list");
const designSwiper = document.querySelectorAll(".designSwiper");
cate.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    for (i = 0; i < cate.length; i++) {
      cate[i].classList.remove("on");
      designSwiper[i].classList.remove("on");
    }
    cate[index].classList.add("on");
    designSwiper[index].classList.add("on");
  });
});
