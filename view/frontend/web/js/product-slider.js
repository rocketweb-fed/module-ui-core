define([
    'jquery', 
    'slick'
], function ($) {
    $.widget('rw.slider', {
        options: {
            total: 0,
            type: 'widget-product-slider',
            sliderConfig: {},
            breakpoints: {}
        },

        _create: function() {
            var self = this;

            self._initializeSlider();
        },

        _initializeSlider: function() {
            var self = this,
                slider = $(this.element),
                items = ((this.options.sliderConfig.items >= 0 && this.options.sliderConfig.items != null) ? this.options.sliderConfig.items : 2),
                total = this.options.total,
                stagePadding = this.options.sliderConfig.stagePadding != '' ? parseInt(this.options.sliderConfig.stagePadding) : 0,
                animate_Out = this.options.sliderConfig.transition == 'fadeOut' ? true : false;
                
                slider.slick({
                    autoplay: parseInt(self.options.sliderConfig.autoplay) == 1 ? true : false,
                    autoplaySpeed: (parseInt(self.options.sliderConfig.autoplayTimeout) > 0 && self.options.sliderConfig.autoplayTimeout != null) ? parseInt(self.options.sliderConfig.autoplayTimeout) : 3000,
                    adaptiveHeight: parseInt(self.options.sliderConfig.autoHeight) == 1 ? true : false,
                    arrows: parseInt(self.options.sliderConfig.nav) == 1 ? true : false,
                    dots: (parseInt(self.options.sliderConfig.dots) == 1 && parseInt(items) < total) ? true : false,
                    lazyLoad: parseInt(self.options.sliderConfig.lazyLoad) == 1 ? "ondemand" : "progressive",
                    infinite: parseInt(self.options.sliderConfig.loop) == 1 ? true : false,
                    centerPadding: parseInt(self.options.sliderConfig.center) == 1 ? 0 : stagePadding,
                    slidesToShow: parseInt(items),
                    slidesToScroll: parseInt(items),
                    fade: animate_Out,
                    responsive: [
                        {
                            breakpoint: self.options.breakpoints.breakpoint_1,
                            settings: {
                                slidesToShow: (self.options.sliderConfig.items_brk1 >= 0 && self.options.sliderConfig.items_brk1 != null) ? parseInt(self.options.sliderConfig.items_brk1) : parseInt(items),
                                slidesToScroll: (self.options.sliderConfig.items_brk1 >= 0 && self.options.sliderConfig.items_brk1 != null) ? parseInt(self.options.sliderConfig.items_brk1) : parseInt(items),
                                arrows: parseInt(self.options.sliderConfig.nav_brk1) == 1 ? true : false,
                                dots: (self.options.sliderConfig.items_brk1 != null && self.options.sliderConfig.items_brk1 < total) ? true : false,
                                fade: false
                            }
                        },
                        {
                            breakpoint: self.options.breakpoints.breakpoint_2,
                            settings: {
                                slidesToShow: (self.options.sliderConfig.items_brk2 >= 0 && self.options.sliderConfig.items_brk2 != null) ? parseInt(self.options.sliderConfig.items_brk2) : parseInt(items),
                                slidesToScroll: (self.options.sliderConfig.items_brk2 >= 0 && self.options.sliderConfig.items_brk2 != null) ? parseInt(self.options.sliderConfig.items_brk2) : parseInt(items),
                                arrows: parseInt(self.options.sliderConfig.nav_brk2) == 1 ? true : false,
                                dots: (self.options.sliderConfig.items_brk2 != null && self.options.sliderConfig.items_brk2 < total) ? true : false,
                                fade: false
                            }
                        },
                        {
                            breakpoint: self.options.breakpoints.breakpoint_3,
                            settings: {
                                slidesToShow: (self.options.sliderConfig.items_brk3 >= 0 && self.options.sliderConfig.items_brk3 != null) ? parseInt(self.options.sliderConfig.items_brk3) : parseInt(items),
                                slidesToScroll: (self.options.sliderConfig.items_brk3 >= 0 && self.options.sliderConfig.items_brk3 != null) ? parseInt(self.options.sliderConfig.items_brk3) : parseInt(items),
                                arrows: parseInt(self.options.sliderConfig.nav_brk3) == 1 ? true : false,
                                dots: (self.options.sliderConfig.items_brk3 != null && self.options.sliderConfig.items_brk3 < total) ? true : false
                            }
                        },
                        {
                            breakpoint: self.options.breakpoints.breakpoint_4,
                            settings: {
                                slidesToShow: (self.options.sliderConfig.items_brk4 >= 0 && self.options.sliderConfig.items_brk4 != null) ? parseInt(self.options.sliderConfig.items_brk4) : parseInt(items),
                                slidesToScroll: (self.options.sliderConfig.items_brk4 >= 0 && self.options.sliderConfig.items_brk4 != null) ? parseInt(self.options.sliderConfig.items_brk4) : parseInt(items),
                                arrows: parseInt(self.options.sliderConfig.nav_brk4) == 1 ? true : false,
                                dots: (self.options.sliderConfig.items_brk4 != null && self.options.sliderConfig.items_brk4 < total) ? true : false
                            }
                        }
                    ]
                });
        },
    });

    return $.rw.slider;
});