const hrefs = document.querySelectorAll('a[href*="#"]')

hrefs?.forEach((href) => {
	href.addEventListener('click', (e) => {
		e.preventDefault()

		let blockClass = href.getAttribute('href').substr(1),
			scrollBlock = document.querySelector(`.${blockClass}`)

		console.log(scrollBlock)

		if (scrollBlock) {
			let y = scrollBlock.getBoundingClientRect().top + window.pageYOffset
			window.scrollTo({top: y, behavior: 'smooth'})
		}
	})
})