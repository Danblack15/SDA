import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination])

document.addEventListener('DOMContentLoaded', () => {
    let sliderWrapper = document.querySelectorAll('.team-slider')

    sliderWrapper?.forEach(slider => {
        let container = slider.querySelector('.cases-swiper')

        const swiper = new Swiper(container, {
            slidesPerView: 1,
            spaceBetween: 18,
            allowTouchMove: true,
            loop: true,
            navigation: {
                nextEl: '.cases-swiper-nav__next',
                prevEl: '.cases-swiper-nav__prev',
            },
            pagination: {
                el: '.cases-swiper-nav__pagination',
                type: 'bullets',
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 1
            },

            breakpoints: {
                1280: {
                    slidesPerView: 2.1,
                    allowTouchMove: false,
                },
                780: {
                    slidesPerView: 1.5,
                    allowTouchMove: true,
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
    })
})


let clickBoxes = document.querySelectorAll('.team-wrapper__slide')

clickBoxes?.forEach((clickBox) => {
    let popup = clickBox.querySelector('.cases-wrapper__info')

    let closeBox = clickBox.querySelector('.cases-wrapper__info-close')

    closeBox.addEventListener('click', (e) => {
        e.stopPropagation()
        let popup = closeBox.parentElement
        popup.classList.remove('cases-wrapper__info--active')
    })

    clickBox.addEventListener('click', () => {
        if (window.innerWidth <= 1280) {
            let allPopup = document.querySelectorAll('.cases-wrapper__info')

            allPopup.forEach((popup) => {
                popup.classList.remove('cases-wrapper__info--active')
            })

            popup.classList.add('cases-wrapper__info--active')
        }
    })
})