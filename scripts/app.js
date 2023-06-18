document.addEventListener('DOMContentLoaded', ()=>{
    const servicesSlider = new Swiper('.np-services__slider', {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.services-next',
            prevEl: '.services-prev'
        },
        breakpoints: {
            0:{ 
            },
            560: {
                spaceBetween: 20,
            },
            768: {
                spaceBetween: 30,
            },
            1024: {
            },
        }
    })
    const servicesdopSlider = new Swiper('.np-services-dop__slider', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.services-dop-next',
            prevEl: '.services-dop-prev'
        },
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            0:{ 
                slidesPerView: 2,
            },
            560: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    })
})