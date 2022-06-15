window.onload = function () {
    document.body.classList.add('onload');

    $(".carousel").addClass("loadSlider");
}

$(document).ready(() => {

    let testimonialsSwiper = new Swiper(".s-testimonials .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".s-testimonials .swiper-button-next",
            prevEl: ".s-testimonials .swiper-button-prev",
        },

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
    let partnersSwiper = new Swiper(".s-partners .mySwiper", {
        slidesPerView: 1,
        autoHeight: true,
        calculateHeight:true,
        spaceBetween: 20,
        pagination: {
            el: ".s-partners .swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });

    var gallerySwiper = new Swiper(".sd-gallery .swiper-gallery", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        navigation: {
            nextEl: ".sd-gallery .swiper-button-next",
            prevEl: ".sd-gallery .swiper-button-prev"
        },
        pagination: {
            el: ".sd-gallery .swiper-pagination",
            clickable: true,
        },
    });

/*gallery slider*/
    const sliderThumbs = new Swiper('.s-gallery-inside .slider-thumbs .swiper-container', {
        // задаем параметры
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.s-gallery-inside .slider-btn__next',
            prevEl: '.s-gallery-inside .slider-btn__prev'
        },
        freeMode: true,
        breakpoints: {
            0: {
                direction: 'horizontal',
                spaceBetween: 4,
            },
            768: {
                direction: 'vertical',
            }
        }
    });
    const sliderImages = new Swiper('.s-gallery-inside .slider-main .swiper-container', {
        // задаем параметры
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 32,
        mousewheel: false,
        navigation: {
            nextEl: '.s-gallery-inside .slider-btn__next',
            prevEl: '.s-gallery-inside .slider-btn__prev'
        },
        grabCursor: true,
        thumbs: {
            swiper: sliderThumbs
        },
        breakpoints: {
            0: {
                direction: 'horizontal',
                mousewheel: false,
            },
            768: { // при 768px и выше
                direction: 'horizontal',
            }
        }
    });

});