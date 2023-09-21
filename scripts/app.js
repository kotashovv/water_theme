document.addEventListener('DOMContentLoaded', () => {

    // блок алгоритм

    const algBtns = document.querySelectorAll('.np-alg__btn');

    if (algBtns.length != 0) {
        algBtns.forEach(function(item, index){
            item.addEventListener('click', (e)=>{
                const algTexts = document.querySelectorAll('.np-alg__text');
                algBtns.forEach(function(item){
                    item.classList.remove('active');
                })
                e.target.classList.add('active');
                algTexts.forEach((item)=>{
                    item.classList.remove('active');
                })
                algTexts[index].classList.add('active');
            })
        })
    }


    // калькулятор

    const isCalculator = document.querySelector('.np-calc__body');

    if (isCalculator) {
        const diametrsBtn = document.querySelectorAll('.diametr');
        let diametrSum = 10000;
        let glubinaSum = 5000;
        let complectSum = 1;
        const otherGlubina = document.querySelector('.other-diametr');
    
        const selectOption = document.querySelector('.complect-select');
        
        selectOption.addEventListener('change', (e)=>{
            let selectTotal = e.target.value;
            complectSum = selectTotal;
            totalCalc();
        })
    
        otherGlubina.addEventListener('input', (e)=>{
            diametrsBtn.forEach((item)=>{
                item.classList.remove('active');
            })
            diametrSum = +e.target.value * 300;
            totalCalc(diametrSum, glubinaSum, complectSum)
        })
    
        diametrsBtn.forEach(function (item) {
            item.addEventListener('click', (e) => {
                diametrsBtn.forEach((item) => {
                    item.classList.remove('active');
                })
                otherGlubina.value = null;
                e.target.classList.add('active');
                let price = item.getAttribute('data-value');
                diametrSum = +price;
                totalCalc(diametrSum, glubinaSum, complectSum)
            })
        })
    
        
        const glubinaBtn = document.querySelectorAll('.glubina');
        glubinaBtn.forEach(function (item) {
            item.addEventListener('click', (e) => {
                glubinaBtn.forEach((item) => {
                    item.classList.remove('active');
                })
                e.target.classList.add('active');
                let price = item.getAttribute('data-value');
                glubinaSum = +price;
                totalCalc(diametrSum, glubinaSum, complectSum)
            })
        })
        
        function totalCalc() {
            let total = (diametrSum + glubinaSum) * complectSum;
            total = formatNumberWithSpaces(total);
            function formatNumberWithSpaces(number) {
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
              }
            const inputTotal = document.querySelector('.total-calc');
            inputTotal.innerHTML = total + ' Р';
        }
    }

    

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
            0: {},
            560: {
                spaceBetween: 20,
            },
            768: {
                spaceBetween: 30,
            },
            1024: {},
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
            0: {
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
        navigation: {
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

        faqBtns.forEach(item => {
            item.addEventListener('click', (e) => {
                const textInFaq = document.querySelectorAll('.np-faq__text');
                if (!e.target.classList.contains('active')) {
                    textInFaq.forEach(function (item) {
                        item.classList.remove('active');
                    })
                    faqBtns.forEach(item => {
                        item.classList.remove('active');
                    })
                    item.classList.add('active');
                    item.nextElementSibling.classList.add('active');

                } else {
                    textInFaq.forEach(function (item) {
                        item.classList.remove('active');
                    })
                    faqBtns.forEach(item => {
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
            priceToggle.forEach((item) => {
                item.classList.remove('active');
            })
            priceTable.forEach((item) => {
                item.classList.remove('active');
            })
        }
        priceToggle.forEach(function (item, index) {
            item.addEventListener('click', (e) => {
                nullActive();
                item.classList.add('active');
                priceTable[index].classList.add('active');
            })
        })
    }

    const skvaginaSlider = new Swiper('.np-skvagina__slider-tablet', {
        slidesPerView: 1,
        pagination: {
            el: ".np-skvagina__pagination",
        },
        navigation: {
            nextEl: '.sk-next',
            prevEl: '.sk-prev',
        }
    })

    const blockThree = new Swiper('.npblock3__slider',{
       
        spaceBetween: 30,
        pagination: {
            el: '.npblock3__pagination'
        },
        navigation: {
            nextEl: '.npblock3-next',
            prevEl: '.npblock3-prev'
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            560: {
                slidesPerView: 2,
            }
        }
    })

    const sliderKesson = new Swiper('.kesson__slider', {
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 15,
        navigation: {
            nextEl: '.kesson-next',
            prevEl: '.kesson-prev',
        }
    })
})