let cursor = document.querySelector('.cursor')

if (cursor) {
	window.addEventListener('mousemove', e => {
		if (window.innerWidth > 1280) {
			const {target} = e

			let border = document.querySelector('.cursor__border')
			let box = document.querySelector('.cursor__box')

			if (!target) return

			if (target.closest('a') || target.closest('button') || target.closest('.cursor-on') || target.closest('.swiper-pagination-bullet')) {
				cursor.classList.add('cursor--active')
				border.classList.add('cursor__border--active')
				box.classList.add('cursor__box--disabled')
			} else {
				cursor.classList.remove('cursor--active')
				border.classList.remove('cursor__border--active')
				box.classList.remove('cursor__box--disabled')
			}

			//БЕЛЫЙ ФОН
			if (target.closest('.white-back') && !target.closest('.dark-back')) {
				cursor.classList.add('cursor--dark')
			} else {
				cursor.classList.remove('cursor--dark')
			}

			cursor.style.left = e.clientX + 'px'
			cursor.style.top = e.clientY + 'px'
		}
	})
}