const accordeons = document.querySelectorAll('.accordeon-wrapper')

accordeons?.forEach((accordeon) => {
  const titles = accordeon.querySelectorAll('.accordeon-clickBox')

  titles?.forEach((title) => {
    title.addEventListener('click', (e) => {
      let dopList = title.parentElement.querySelector('.accordeon-dopList')
      let arrow = title.querySelector('svg')

      if (dopList.classList.contains('accordeon-dopList--active')) {
        dopList.style.maxHeight = 0
        dopList.classList.remove('accordeon-dopList--active')

        arrow.classList.add('not-active-arrow')
        setTimeout(() => {
          arrow.classList.remove('active-arrow')
          arrow.classList.remove('not-active-arrow')
        }, 400)

      } else {
        const lists = accordeon.querySelectorAll('.accordeon-dopList')

        lists?.forEach((list) => {
          list.style.maxHeight = 0
          list.classList.remove('accordeon-dopList--active')

          if (list.parentElement.querySelector('svg').classList.contains('active-arrow')) {
            list.parentElement.querySelector('svg').classList.add('not-active-arrow')
            setTimeout(() => {
              list.parentElement.querySelector('svg').classList.remove('active-arrow')
              list.parentElement.querySelector('svg').classList.remove('not-active-arrow')
            }, 400)
          }
        })

        dopList.classList.add('accordeon-dopList--active')
        dopList.style.maxHeight = dopList.scrollHeight + 'px'

        arrow.classList.add('active-arrow')
      }
    })
  })
})