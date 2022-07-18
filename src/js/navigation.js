const hrefs = document.querySelectorAll('a[href*="#"]')

hrefs?.forEach((href) => {
	href.addEventListener('click', (e) => {
		e.preventDefault()

		const blockClass = href.getAttribute('href').substr(1),
			scrollBlock = document.querySelector(`.${blockClass}`)


		if (scrollBlock) {
			scrollBlock.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
	})
})