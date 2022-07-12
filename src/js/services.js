let services = document.querySelectorAll('.services-item__click-box')

services?.forEach((service) => {
	let modal = service.parentElement.querySelector('.modal-service')

	service.addEventListener('click', (e) => {
		let modals = document.querySelectorAll('.modal-service')

		modals.forEach((modal) => {
			if (modal.classList.contains('modal-service--opened')) {
				modal.classList.add('modal-service--closed')
				setTimeout(() => {
					modal.classList.remove('modal-service--opened')
					modal.classList.remove('modal-service--closed')
				}, 400)
			}
		})

		if (!modal.classList.contains('modal-service--opened'))
			modal.classList.add('modal-service--opened')
	})

	let closeModal = service.parentElement.querySelector('.modal-service__close')

	closeModal.addEventListener('click', () => {
		modal.classList.add('modal-service--closed')
		setTimeout(() => {
			modal.classList.remove('modal-service--opened')
			modal.classList.remove('modal-service--closed')
		}, 400)
	})

})



let titles = document.querySelectorAll('.modal-service__title')

titles?.forEach((title) => {
	title.addEventListener('click', (e) => {
		let dopList = title.parentElement.querySelector('.modal-service__dop-list')
		let arrow = title.querySelector('svg')

		if (dopList.classList.contains('modal-service__dop-list--active')) {
			dopList.style.maxHeight = 0
			dopList.classList.remove('modal-service__dop-list--active')

			arrow.classList.add('not-active-arrow')
			setTimeout(() => {
				arrow.classList.remove('active-arrow')
				arrow.classList.remove('not-active-arrow')
			}, 400)

		} else {
			let dopLists = document.querySelectorAll('.modal-service__dop-list')

			dopLists?.forEach((dopList) => {
				dopList.style.maxHeight = 0
				dopList.classList.remove('modal-service__dop-list--active')

				if (dopList.parentElement.querySelector('svg').classList.contains('active-arrow')) {
					dopList.parentElement.querySelector('svg').classList.add('not-active-arrow')
					setTimeout(() => {
						dopList.parentElement.querySelector('svg').classList.remove('active-arrow')
						dopList.parentElement.querySelector('svg').classList.remove('not-active-arrow')
					}, 400)
				}
			})

			dopList.classList.add('modal-service__dop-list--active')
			dopList.style.maxHeight = dopList.scrollHeight + 'px'

			arrow.classList.add('active-arrow')
		}
	})
})