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

    $(".slick").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});