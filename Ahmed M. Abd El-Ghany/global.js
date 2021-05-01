!(function($) {
    $(document).ready(function() {
        // team section

        if ($(".swiper-container").hasClass("team-member-slider")) {
            var swiper = new Swiper('.swiper-container', {
                effect: "coverflow",
                grabCursor: true,
                loop: true,
                allowTouchMove: true,
                slideToclickedslide: true,
                centeredSlides: true,
                slidesPerView: "auto",
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

            });
        }
    });


})(jQuery)