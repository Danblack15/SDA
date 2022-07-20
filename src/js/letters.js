import 'animate.css';
import { WOW } from 'wowjs'

window.wow = new WOW({
	live: false
})

window.wow.init()

function deleteAllActiveInfo() {
	const allInfoBlocks = document.querySelectorAll('.strategy__info-item')

	allInfoBlocks?.forEach((block) => {
		block.classList.remove('strategy__info-item--active')
	})
}

function deleteAllActiveLetters() {
	const letters = document.querySelectorAll('.strategy__letter')

	letters?.forEach((letter) => {
		letter.classList.remove('strategy__letter--active')
	})
}

function interval() {
	let activeLet = document.querySelector('.strategy__letter--active'),
		activeData = activeLet.getAttribute('data-let')

	const letters = {
		's': 0,
		'd': 1,
		'a': 2
	}

	let nowIndex = letters[activeData]

	deleteAllActiveLetters()

	deleteAllActiveInfo()

	if (!(nowIndex > 1)) {
		let nextLet = document.querySelectorAll('.strategy__letter')[nowIndex + 1],
			nextInfo = document.querySelectorAll('.strategy__info-item')[nowIndex + 1]

		nextLet.classList.add('strategy__letter--active')
		nextInfo.classList.add('strategy__info-item--active')
	} else {
		let nextLet = document.querySelectorAll('.strategy__letter')[0],
			nextInfo = document.querySelectorAll('.strategy__info-item')[0]

		nextLet.classList.add('strategy__letter--active')
		nextInfo.classList.add('strategy__info-item--active')
	}
}


const letters = document.querySelectorAll('.strategy__letter')

letters?.forEach((letter) => {
	letter.addEventListener('click', () => {
		let dataLet = letter.getAttribute('data-let')

		deleteAllActiveLetters()

		deleteAllActiveInfo()

		letter.classList.add('strategy__letter--active')

		let info = document.querySelector(`.strategy__info-item[data-let=${dataLet}]`)

		info.classList.add('strategy__info-item--active')

		clearInterval(timeLetter)

		timeLetter = setInterval(interval, 5000)
	})
})


//media popup
const clickBoxes = document.querySelectorAll('.strategy__title-wrapper')

clickBoxes?.forEach((clickBox) => {
	clickBox.addEventListener('click', () => {
		if (window.innerWidth <= 1400) {
			let popup = clickBox.parentElement.querySelector('.strategy__popup'),
				arrow = clickBox.querySelector('.strategy__arrow')

			popup.classList.toggle('strategy__popup--opened')

			arrow.classList.toggle('strategy__arrow--active')


			clearInterval(timeLetter)
		}
	})
})

let timeLetter = setInterval(interval, 5000)