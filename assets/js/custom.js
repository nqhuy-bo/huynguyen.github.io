let config = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    direction: 'ttb',
    wheel       : true,
    releaseWheel: true,
    height: '537px',
    focus: 'center',
    breakpoints: {
        767: {
            direction: 'ltr',
            perPage: 1,
            focus: 'left',
            height: '190px',
        },
        992: {
            direction: 'ltr',
            perPage: 2,
            height: '200px',
        }
    }
};

new Splide('._testimonial_slider', config).mount();