let cursor = document.querySelector('.cursor')

if (cursor) {
	window.addEventListener('mousemove', e => {
		const target = e.target

		if (!target) return

		if (target.closest('a')) {
			cursor.classList.add('cursor--active')
		}

		cursor.style.left = e.pageX + 'px'
		cursor.style.top = e.pageY + 'px'
	})
}