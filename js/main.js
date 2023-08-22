$(function () {
  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    if (sct > 0) {
      $(".header, .to_top").addClass("on");
    } else {
      $(".header, .to_top").removeClass("on");
    }
  });

  $(".mobile_btn").on("click", function () {
    $(this).toggleClass("on");
    $(".gnb").toggleClass("on");
  });

  $(window).on("resize", function () {
    $(".gnb").removeAttr("style");
  });

  $(".main_slide").on("init afterChange", function (e, s, c) {
    const current = $(".main_slide .slick-current");
    current.addClass("on").siblings().removeClass("on");

    $(".main_visual .slide_num span").text(c ? c + 1 : 1);
    $(".main_visual .slide_num strong").text(s.slideCount);
  });

  $(".main_slide").slick({
    pauseOnHover: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
  });

  $(".main_visual .arrows .left").on("click", function () {
    $(".main_slide").slick("slickPrev");
  });
  $(".main_visual .arrows .right").on("click", function () {
    $(".main_slide").slick("slickNext");
  });

  $(".freature_tab_link li").on("click", function (event) {
    event.preventDefault();

    let idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");

    $(".freature_tab_content .con")
      .eq(idx)
      .addClass("on")
      .siblings()
      .removeClass("on");
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    sct > 50 ? $(".to_top").addClass("on") : $(".to_top").removeClass("on");
  });
});
