$('.swiper-wrapper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                prevArrow: '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
                nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1, prevArrow: '<span class="prev_arrow"><i class="fas fa-angle-left"></i></span>',
                nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});