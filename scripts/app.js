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

    const gallerySlider = new Swiper('.np-gallery__slider', {
        pagination: {
            el: '.np-gallery__pagination',
        },
        navigation:{
            prevEl: '.gallery-prev',
            nextEl: '.gallery-next'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            920: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
        
    })


    const faqBtns = document.querySelectorAll('.np-faq__btn');
    if (faqBtns.length > 0) {
        
        faqBtns.forEach(item=>{
            item.addEventListener('click', (e)=>{
                const textInFaq = document.querySelectorAll('.np-faq__text');
                if (!e.target.classList.contains('active')) {
                    textInFaq.forEach(function(item){
                        item.classList.remove('active');
                    })
                    faqBtns.forEach(item=>{
                        item.classList.remove('active');
                    })
                    item.classList.add('active');
                    item.nextElementSibling.classList.add('active');
                    
                } else {
                    textInFaq.forEach(function(item){
                        item.classList.remove('active');
                    })
                    faqBtns.forEach(item=>{
                        item.classList.remove('active');
                    })
                }
                
                
            })
        })
    }

    /* обновление --------- */
    

    const priceToggle = document.querySelectorAll('.np-prices__toggles-btn')
    if (priceToggle.length != 0) {
        const priceTable = document.querySelectorAll('.np-prices__table')

        function nullActive() {
            priceToggle.forEach((item)=>{
                item.classList.remove('active');
            })
            priceTable.forEach((item)=>{
                item.classList.remove('active');
            })
        }
        priceToggle.forEach(function(item, index){
            item.addEventListener('click', (e)=>{
                nullActive();
                item.classList.add('active');
                priceTable[index].classList.add('active');
            })
        })
    }
})