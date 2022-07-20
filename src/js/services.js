import simplebar from 'simplebar';

const services = document.querySelectorAll('.services-item__click-box')

services?.forEach((service) => {
	let modal = service.parentElement.querySelector('.modal-service')

	service.addEventListener('click', (e) => {
		const modals = document.querySelectorAll('.modal-service')

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

	const closeModal = service.parentElement.querySelector('.modal-service__close')

	closeModal.addEventListener('click', () => {
		modal.classList.add('modal-service--closed')
		setTimeout(() => {
			modal.classList.remove('modal-service--opened')
			modal.classList.remove('modal-service--closed')
		}, 400)
	})

})