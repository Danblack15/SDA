let accordeons = document.querySelectorAll('.accordeon-wrapper')

accordeons?.forEach((accordeon) => {
  let titles = accordeon.querySelectorAll('.accordeon-clickBox')

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
        let dopLists = accordeon.querySelectorAll('.accordeon-dopList')

        dopLists?.forEach((dopList) => {
          dopList.style.maxHeight = 0
          dopList.classList.remove('accordeon-dopList--active')

          if (dopList.parentElement.querySelector('svg').classList.contains('active-arrow')) {
            dopList.parentElement.querySelector('svg').classList.add('not-active-arrow')
            setTimeout(() => {
              dopList.parentElement.querySelector('svg').classList.remove('active-arrow')
              dopList.parentElement.querySelector('svg').classList.remove('not-active-arrow')
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