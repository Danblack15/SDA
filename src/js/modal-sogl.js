const openModal = document.querySelector('.form__checkbox-sogl')

openModal?.addEventListener('click', () => {
	let modal = document.querySelector('.modal-sogl')

	modal.classList.add('modal-sogl--opened')

	document.body.style.overflowY = 'hidden'
})

const closeModal = document.querySelector('.sogl__close')

closeModal?.addEventListener('click', () => {
	let modal = document.querySelector('.modal-sogl')

	modal.querySelector('.sogl').classList.add('sogl--closed')

	setTimeout(() => {
		modal.querySelector('.sogl').classList.remove('sogl--closed')

		modal.classList.remove('modal-sogl--opened')

		document.body.style.overflowY = 'auto'
	}, 600)

})