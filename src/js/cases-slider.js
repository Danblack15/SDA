import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination])

document.addEventListener('DOMContentLoaded', () => {
	let sliderWrapper = document.querySelectorAll('.cases-slider')

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

			on: {
				slideChange: function (swiper) {
					let activeIndex = swiper.realIndex,
						navs = document.querySelectorAll('.cases__nav-item')

					navs?.forEach((nav, index) => {
						if (index == activeIndex) {
							nav.classList.add('cases__nav-item--active')
						} else {
							nav.classList.remove('cases__nav-item--active')
						}
					})
				},
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

		let navs = document.querySelectorAll('.cases__nav-item')

		navs?.forEach((nav) => {
			nav.addEventListener('click', () => {
				let data = nav.getAttribute('data-slide')

				swiper.slideToLoop(Number(data), 400)
			})
		})

		let allSlides = document.querySelectorAll('.cases-wrapper__slide')

		allSlides?.forEach((slide) => {
			slide.addEventListener('click', () => {
				let data = slide.getAttribute('data-slide')

				swiper.slideToLoop(Number(data), 400)
			})
		})
	});
})
