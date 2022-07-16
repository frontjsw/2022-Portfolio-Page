$(function () {
  // 헤더 gnb 클릭시 선택
  $("header .gnb a").click(function () {
    $("header .gnb a").removeClass("on");
    $(this).addClass("on");
  });
  // 헤더 메인 로고 클릭시 펼쳐지는 메뉴

  $("header .gnb_more").click(function () {
    $("header .sub_menu").toggleClass("on");
  });

  $("header h1").click(function () {
    if ($(this).hasClass("on")) {
      $("body").removeClass("hidden");
      $("header .more_menu").removeClass("on");
      $(this).removeClass("on");
    } else {
      $("body").addClass("hidden");
      $("header .more_menu").addClass("on");
      $(this).addClass("on");
    }
  });

  // 헤더 search 클릭시 펼쳐지는 메뉴
  $("header .search_btn").click(function () {
    $("header .more_menu").removeClass("on");
    $("header h1").removeClass("on");

    $("body").addClass("hidden");
    $(".search_area").addClass("on");
  });
  $(".search_area .close").click(function () {
    $("body").removeClass("hidden");
    $(".search_area").removeClass("on");
  });

  // gnb 리스트 슬라이드
  var swiper = new Swiper(".gnb_slide", {
    slidesPerView: "auto",
    spaceBetween: 15,
  });

  // 메인 이미지 슬라이드
  var swiper = new Swiper(".main-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 인기상품 이미지 슬라이드
  var swiper = new Swiper(".best-container", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });
  // 컬렉션 상품 이미지 슬라이드
  var swiper = new Swiper(".product-container", {
    slidesPerView: 2,
    spaceBetween: 10,
  });

  // 신상 gnb 클릭시 선택
  $(".new_area .gnb li").click(function () {
    idx = $(this).index() + 1;

    $(".new_area .gnb li").removeClass("on");
    $(this).addClass("on");

    $(".new_con_wrap .new_con").removeClass("on");
    $("#new_con" + idx).addClass("on");
  });

  // footer 더보기 메뉴 펼치기
  $("footer .tit_wrap a").click(function () {
    $("footer .more").toggleClass("on");
  });
});
