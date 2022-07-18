import simplebar from 'simplebar';

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