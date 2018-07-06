var config = {
    map: {
        '*': {
            productSlider: 'RocketWeb_UiCore/js/product-slider'
        }
    },
    paths: {
        slick: 'RocketWeb_UiCore/js/slick.min'
    },
    shim: {
        productSlider: {
            deps: ['slick']
        }
    }
};