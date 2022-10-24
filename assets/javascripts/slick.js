$('.featured_slider').slick(
    {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        appendDots: $('.feature_slider_dots'),
        responsive:
        [
            {
                breakpoint: 890,
                settings:
                {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings:
                {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    }
);
$('.event_slider').slick(
    {
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive:
        [
            {
                breakpoint: 915,
                settings:
                {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 781,
                settings:
                {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 650,
                settings:
                {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            ,
            {
                breakpoint: 500,
                settings:
                {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
);
$('.event_detailed_coverage_slider').slick(
    {
        slidesToShow: 4,
        slidesToScroll: 6,
        responsive:
        [
            {
                breakpoint: 930,
                settings:
                {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 781,
                settings:
                {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 600,
                settings:
                {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }
);

$('.event_page_slider').slick(
    {
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive:
        [
            {
                breakpoint: 980,
                settings:
                {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 700,
                settings:
                {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings:
                {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
);

$('.ui-tabs-anchor').click(
    ()=>
    {
        console.log("CLICK")
        $('.event_page_slider').slick('refresh');
        $('.event_page_slider').slick('resize');
    }
)


// console.log($(".event").children().length)