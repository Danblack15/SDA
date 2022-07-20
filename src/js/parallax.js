function random() {
    return Math.random(1)
}

function topElem(elem) {
    const headerHeight = document.querySelector('header').offsetHeight
    return elem.offsetTop + headerHeight
}

window.addEventListener('scroll', (e) => {
    const scroll = window.scrollY

    const allDots = document.querySelectorAll('.back-dots__dot')

    allDots?.forEach((dot, index) => {

        dot.style.transform = `translateY(${scroll * (0.5 / (index + 0.4))}px)`

        const rect = dot.getBoundingClientRect()

        let whiteBlock1 = document.querySelector('.services'),
            whiteBlock2 = document.querySelector('.strategy'),
            whiteBlock3 = document.querySelector('.team')

        let dotTop = rect.top + pageYOffset,
            whiteBlocl1Top = topElem(whiteBlock1),
            whiteBlock1Bottom = whiteBlock1.offsetHeight + whiteBlocl1Top,

            whiteBlock2Top = topElem(whiteBlock2),
            whiteBlock2Bottom = whiteBlock2.offsetHeight + whiteBlock2Top,

            whiteBlock3Top = topElem(whiteBlock3),
            whiteBlock3Bottom = whiteBlock3.offsetHeight + whiteBlock3Top


        if (dotTop >= whiteBlocl1Top && dotTop <= whiteBlock1Bottom) {
            dot.classList.add('back-dots__dot--blue')
        } else if (dotTop >= whiteBlock2Top && dotTop <= whiteBlock2Bottom) {
            dot.classList.add('back-dots__dot--blue')
        } else if (dotTop >= whiteBlock3Top && dotTop <= whiteBlock3Bottom) {
            dot.classList.add('back-dots__dot--blue')
        } else {
            dot.classList.remove('back-dots__dot--blue')
        }
    })
})