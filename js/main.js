$(function () {

    "use strict";

    $("[data-bs-toggle='tooltip']").tooltip();

    $(".header").on("mousemove", function (e) {
        $(".shapes-icon img:nth-child(1)").css({
            transform: `translate(${e.clientX / 30}px, ${e.clientY / 30}px)`
        });
        $(".shapes-icon img:nth-child(2)").css({
            transform: `translate(${e.clientX / 15}px, ${e.clientY / 15}px)`
        });
    });

    new WOW().init();

    $(".category-slick").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: $(".prev-arrow"),
        nextArrow: $(".next-arrow"),
    });

    $(".testi-slick").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});