window.onload = function () {
  AOS.init();
  // 헤더 메뉴 모션 시작
  const gnb = document.querySelector(".gnb");
  const gnbWrap = document.querySelector(".gnb_wrap");
  const gnbLength = document.getElementsByClassName("sub_gnb").length;

  let listNum = [];
  let gnbList = document.querySelectorAll(".sub_gnb");
  for (i = 0; i < gnbLength; i++) {
    let listCount = gnbList[i].childElementCount;
    listNum.push(listCount);
  }
  const mouseOver = gnbWrap.addEventListener("mouseenter", () => {
    const listMax = Math.max(...listNum);
    const liH = document.querySelector(".sub_gnb li").offsetHeight;
    gnb.classList.add("on");
    document.querySelector(".sub_gnb").style.height = listMax * liH + "px";
  });
  const mouseOut = gnb.addEventListener("mouseleave", () => {
    gnb.classList.remove("on");
    document.querySelector(".sub_gnb").style.height = "0px";
  });
  // 헤더 메뉴 모션 끝

  // 메인 콘텐츠 슬라이더 시작
  var mainCon = new Swiper(".mainCon ", {
    loop: true,
  });
  var subCon = new Swiper(".subCon", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
  mainCon.controller.control = subCon;
  subCon.controller.control = mainCon;
  // 메인 콘텐츠 슬라이더 끝

  // // event 이미지 모션 시작
  // const eventTop = document.querySelector(".event").offsetTop - 600;
  // window.addEventListener("scroll", () => {
  //   let winY = window.scrollY;
  //   if (winY > eventTop) {
  //     document.querySelector(".left_back").style.width = "0%";
  //     document.querySelector(".right_back").style.width = "0%";
  //   } else if (winY < eventTop - 600) {
  //     document.querySelector(".left_back").style.width = "50%";
  //     document.querySelector(".right_back").style.width = "50%";
  //   }
  // });
  // // event 이미지 모션 끝

  // event 동영상 재생 시작
  const videoPlay = document.querySelectorAll(".play");
  const videoClose = document.querySelectorAll(".close");
  const eventVideo = document.querySelectorAll(".event video");

  for (const play of videoPlay) {
    play.addEventListener("click", (e) => {
      e.target.parentNode.classList.add("on");
    });
  }

  for (const close of videoClose) {
    close.addEventListener("click", (e) => {
      e.target.parentNode.classList.remove("on");
      for (vid of eventVideo) {
        vid.pause();
      }
    });
  }

  // event 동영상 재생 끝
};
