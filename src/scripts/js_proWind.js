let front = {
    nav: $('.navbar'),
    slider_options_default: {
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: false,
        cellAlign: 'left',
        contain: true
    },

    init: function () {
        this.events();
        this.headerScroll();
        this.spoiler.init();
    },
    spoiler : {
        init : function () {
            $(".spoiler-readmore").on('click', function(){
                $(this).parents('.spoiler').find('.spoiler-content').slideToggle();
                $(this).find('span').toggleClass('active');
                return false;
            });
        }
    },

    headerScroll: function () {
        if ($(window).scrollTop() > 5) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    },

    events: function () {
        let self = this;
        $(window).on('scroll', function () {
            self.headerScroll();
        });
    }
};

let modal = {
    closeButton: $('.modal-content__close'),
    closeOverlay: $('.modal'),
    can: 1,
    popupTop: 0,
    init: function () {
        this.events();
    },


    removeScroll: function () {
        modal.popupTop = $(window).scrollTop();

        $('html').css({
            "position": "fixed",
            "top": -$(window).scrollTop(),

            "width": "100%"
        });


    },
    carousel: function() {
        $(".article__carousel").each(function(e) {
            var n = $(this)
                , t = n.find(".article__carousel__wrapper");
            var r = $(this).find(".article__carousel__item").length;
            $('<div class="article__carousel__arrows"></div><div class="article__carousel__count"></div>').appendTo(n);
            function a(e, t, i) {
                e.find(".article__carousel__count").html(i + " / " + t)
            }
            t.on("init", function() {
                if (r > 1) {
                    a(n, r, 1)
                }
            });
            t.on("afterChange", function(e, t, i) {
                if (r > 1) {
                    a(n, r, i + 1)
                }
            });
            t.slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                speed: 700,
                cssEase: "linear",
                draggable: false,
                adaptiveHeight: true,
                prevArrow: '<button class="slick-prev btn-arrow arrow-left" aria-label="Previous" type="button"><span class="btn-arrow__line"></span><span class="btn-arrow__line"></span></button>',
                nextArrow: '<button class="slick-next btn-arrow arrow-right" aria-label="Next" type="button"><span class="btn-arrow__line"></span><span class="btn-arrow__line"></span></button>',
                appendArrows: n.find(".article__carousel__arrows")
            });
            if (e % 2 === 0) {
                n.addClass("move-left")
            } else {
                n.addClass("move-right")
            }
        })
    },

    addScroll: function () {
        $('html').css({
            "position": "static"
        });
        window.scroll(0, modal.popupTop);
    },

    openModal: function (id) {
        let modalWindow = $(id);
        modalWindow.fadeIn();
        modalWindow.find('.modal-content').removeClass('animate-away').addClass('animate-in');
       // $('body').addClass('overflow-hidden');
      //  modal.removeScroll();
    },

    closeModal: function (id) {
        let modalWindow = $(id);
        modalWindow.find('.modal-content').removeClass('animate-in').addClass('animate-away');
        modalWindow.fadeOut();
      //  modal.addScroll();
       // $('body').removeClass('overflow-hidden');
    },

    events: function () {

        $(document).on('click', '.modalTrigger', function (e) {
            e.preventDefault();
            let self = $(this),
                target = self.attr('data-modal');
            modal.openModal(target);
        });

        $(document).on('click', '.modal', function (event) {
            let self = '#' + $(this).attr('id');
            if (event.target.className == 'modal-body') {
                modal.closeModal(self);
            }
        });

        $(document).on('click', '.modal-content__close', function () {
            let self = '#' + $(this).closest('.modal').attr('id');
            modal.closeModal(self);
        });
    }
};

jQuery(function () {
    front.init();
    modal.init();

    $(".burger").on("click", function () {
        $(this).toggleClass("active"),
            $(".header-main").toggleClass("is-visible")
    })

});
