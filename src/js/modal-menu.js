let modal = document.querySelector('.modal-back')

function closeModalFun(modalWrapper, modal) {
  modalWrapper.classList.remove('modal-menu--opened')
  modalWrapper.classList.add('modal-menu--closed')
  setTimeout(() => {
    modal.classList.remove('modal-back--opened')
    modalWrapper.classList.remove('modal-menu--closed')
    document.body.style.overflowY = 'auto'
  }, 400)
}

window.addEventListener('resize', e => {
  if (window.innerWidth <= 1280 && modal) {

    let openModal = document.querySelector('.header-nav__open-modal'),
      closeModal = document.querySelector('.modal-menu__close'),
      modalWrapper = document.querySelector('.modal-menu')

    openModal.addEventListener('click', () => {
      modal.classList.add('modal-back--opened')
      modalWrapper.classList.add('modal-menu--opened')
      document.body.style.overflow = 'hidden'
    })

    closeModal.addEventListener('click', () => {
      closeModalFun(modalWrapper, modal)
    })

    let closeOut = document.querySelector('.modal-back')

    closeOut.addEventListener('click', (e) => {
      if (!e.target.closest('.modal-menu')) {
        closeModalFun(modalWrapper, modal)
      }
    })

    const navItems = document.querySelectorAll('.modal-menu__item ')

    navItems?.forEach((nav) => {
      nav.addEventListener('click', () => {
        closeModalFun(modalWrapper, modal)
      })
    })

  } else {
    modal.classList.remove('modal-back--opened')
    document.body.style.overflowY = 'auto'
  }
})