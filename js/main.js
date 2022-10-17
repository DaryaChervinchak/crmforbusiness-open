$(function () {
  $(".products__slider ").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.png" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.png" alt=""></img>',
    dots: true,
    responsive: [{
        breakpoint: 1369,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 882,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
          dots: false,
        },
      },
    ],
  });

  $(".advantages__slider ").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.png" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.png" alt=""></img>',
    dots: true,
    responsive: [{
        breakpoint: 1369,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 882,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
          dots: false,
        },
      },
    ],
  });
  $(".awards__items").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [{
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 652,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });

  $(".confidence__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 800,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 882,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  const anchors = document.querySelectorAll("a.jsScroll");

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href");

      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  $(".event__btn").click(function (event) {
    event.preventDefault();

    let dataID = $(this).attr("data-id");
    let dataTitle = $(this).attr("data-title");
    let dataText = $(this).attr("data-text");

    $(".modal input[name=Campaign_ID]").val(dataID);
    $(".modal .form__title").text(dataTitle);
    $(".modal .form__text").text(dataText);
    $(".modal, .modal__overlay ").fadeIn(400);
  });

  $(".modal__close, .modal__overlay").click(function () {
    $(".modal, .modal__overlay").fadeOut(400);
  });

  $(".jsForm").on("submit", function (e) {
    e.preventDefault();
    const _this = $(this);
    _this.ajaxSubmit({
      crossDomain: true,
      dataType: "jsonp",
      _this: this,
      complete: function () {
        _this.hide();
        _this.next().removeClass("hidden");
      },
    });
  });

  $(document).ready(function () {
    $('input[name="oid"]').each(function (index, input) {
      input.value = "00D200000008P1X";
    });
  });
});