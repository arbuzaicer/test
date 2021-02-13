$('.info-icon-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                prevArrow: '<button class="prev"></button>',
                nextArrow: '<button class="next"></button>',
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                prevArrow: '<button class="prev"></button>',
                nextArrow: '<button class="next"></button>',
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 970,
            settings: {
                slidesToShow: 2,
                prevArrow: '<button class="prev"></button>',
                nextArrow: '<button class="next"></button>',
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                prevArrow: '<button class="prev"></button>',
                nextArrow: '<button class="next"></button>',
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                prevArrow: '<button class="prev"></button>',
                nextArrow: '<button class="next"></button>',
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                prevArrow: '<button class="prev"></button>',
                nextArrow: '<button class="next"></button>',
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 470,
            settings: {
                slidesToShow: 1,
                prevArrow: '<button class="prev"></button>',
                nextArrow: '<button class="next"></button>',
                slidesToScroll: 1,
            },
        },
    ],
});
