let cursor = document.querySelector('.cursor')

if (cursor) {
	window.addEventListener('mousemove', e => {
		const target = e.target

		let border = document.querySelector('.cursor__border')
		let box = document.querySelector('.cursor__box')

		if (!target) return

		if (target.closest('a')) {
			cursor.classList.add('cursor--active')
			border.classList.add('cursor__border--active')
			box.classList.add('cursor__box--disabled')
		} else {
			cursor.classList.remove('cursor--active')
			border.classList.remove('cursor__border--active')
			box.classList.remove('cursor__box--disabled')
		}

		cursor.style.left = e.pageX + 'px'
		cursor.style.top = e.pageY + 'px'
	})
}