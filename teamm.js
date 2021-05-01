!(function($) {

    $(document).ready(function() {

        if ($(".swiper-container").hasClass("team-member-slider")) {
            var swiper = new Swiper('.swiper-container', {
                slidesPreview: 3,
                allowTouchMove: true,
                loop: true,
                centeredSlides: true,
                slideToclickedslide: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 100,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                },
                grabcursor: true,
                autoplay: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    480: {
                        slidesPreview: 1,
                        centeredSlides: false,
                        effect: "slide",

                    }
                }


            });

        }
    });

})(jQuery)