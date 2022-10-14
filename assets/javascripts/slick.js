$('.featured_slider').slick(
    {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        appendDots: $('.feature_slider_dots'),
    }
);
$('.event_slider').slick(
    {
        slidesToShow: 3,
        slidesToScroll: 3,
        // dots: true,
        // appendDots: $('.feature_slider_dots'),
    }
);
$('.event_detailed_coverage_slider').slick(
    {
        slidesToShow: 4,
        slidesToScroll: 6,
        // dots: true,
        // appendDots: $('.feature_slider_dots'),
    }
);

// $(window).resize(
//     ()=>
//     {
//         document.querySelector('.featured_matches > .wrapper').style.width = window.innerWidth +"px";
//         console.log(window.innerWidth)
//     }
// )