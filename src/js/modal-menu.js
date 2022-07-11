let modal = document.querySelector('.modal-back')

if (modal) {
	let openModal = document.querySelector('.header-nav__open-modal'),
		closeModal = document.querySelector('.modal-menu__close'),
		modalWrapper = document.querySelector('.modal-menu')

	openModal.addEventListener('click', () => {
		modal.classList.add('modal-back--opened')
		modalWrapper.classList.add('modal-menu--opened')
		document.body.style.overflow = 'hidden'
	})

	closeModal.addEventListener('click', () => {
		modalWrapper.classList.remove('modal-menu--opened')
		modalWrapper.classList.add('modal-menu--closed')
		setTimeout(() => {
			modal.classList.remove('modal-back--opened')
			modalWrapper.classList.remove('modal-menu--closed')
			document.body.style.overflow = 'auto'
		}, 400)
	})

	let closeOut = document.querySelector('.modal-back')

	closeOut.addEventListener('click', (e) => {
		if (!e.target.closest('.modal-menu')) {
			modalWrapper.classList.remove('modal-menu--opened')
			modalWrapper.classList.add('modal-menu--closed')
			setTimeout(() => {
				modal.classList.remove('modal-back--opened')
				modalWrapper.classList.remove('modal-menu--closed')
				document.body.style.overflow = 'auto'
			}, 400)
		}
	})
}