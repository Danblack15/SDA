import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination])

document.addEventListener('DOMContentLoaded', () => {
    let sliderWrapper = document.querySelectorAll('.team-slider')

    sliderWrapper?.forEach(slider => {
        let container = slider.querySelector('.cases-swiper')

        const swiper = new Swiper(container, {
            slidesPerView: 1,
            spaceBetween: 18,
            loop: true,
            allowTouchMove: false,
            navigation: {
                nextEl: '.cases-swiper-nav__next',
                prevEl: '.cases-swiper-nav__prev',
            },
            pagination: {
                el: '.cases-swiper-nav__pagination',
                type: 'bullets',
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 4
            },

            breakpoints: {
                1000: {
                    slidesPerView: 2.1,
                },
                780: {
                    slidesPerView: 1.5,
                }
            }

        })

        let allSlides = document.querySelectorAll('.team-wrapper__slide')

        allSlides?.forEach((slide) => {
            slide.addEventListener('click', () => {
                let data = slide.getAttribute('data-slide')

                swiper.slideToLoop(Number(data), 400)
            })
        })
    });
})
