const closeModals = document.querySelectorAll('.close-success-modal-js')

closeModals?.forEach((closeModal) => {
	closeModal.addEventListener('click', () => {

		let modalWrapper = closeModal.parentElement.parentElement,
			modal = closeModal.parentElement

		modal.classList.add('modal-success--close')

		setTimeout(() => {
			modal.classList.remove('modal-success--close')
			modalWrapper.classList.remove('modal-wrapper--active')
			document.body.style.overflowY = "auto"
			location.reload()
		}, 600)
	})
})