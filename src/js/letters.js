import 'animate.css';
import { WOW } from 'wowjs'

window.wow = new WOW({
	live: false
})

window.wow.init()

let timeLetter = setInterval(interval, 4000)

function interval() {
	let activeLet = document.querySelector('.strategy__letter--active'),
		activeData = activeLet.getAttribute('data-let')

	const letters = {
		's': 0,
		'd': 1,
		'a': 2
	}

	let nowInex = letters[activeData]

	deleteAllActiveLetters()

	deleteAllActiveInfo()

	if (!(nowInex > 1)) {
		let nextLet = document.querySelectorAll('.strategy__letter')[nowInex + 1],
			nextInfo = document.querySelectorAll('.strategy__info-item')[nowInex + 1]

		nextLet.classList.add('strategy__letter--active')
		nextInfo.classList.add('strategy__info-item--active')
	} else {
		let nextLet = document.querySelectorAll('.strategy__letter')[0],
			nextInfo = document.querySelectorAll('.strategy__info-item')[0]

		nextLet.classList.add('strategy__letter--active')
		nextInfo.classList.add('strategy__info-item--active')
	}
}


let letters = document.querySelectorAll('.strategy__letter')

letters?.forEach((letter) => {
	letter.addEventListener('click', () => {
		let dataLet = letter.getAttribute('data-let')

		deleteAllActiveLetters()

		deleteAllActiveInfo()

		letter.classList.add('strategy__letter--active')

		let info = document.querySelector(`.strategy__info-item[data-let=${dataLet}]`)

		info.classList.add('strategy__info-item--active')

		clearInterval(timeLetter)

		timeLetter = setInterval(interval, 4000)
	})
})

function deleteAllActiveInfo() {
	let allInfoBlocks = document.querySelectorAll('.strategy__info-item')

	allInfoBlocks?.forEach((block) => {
		block.classList.remove('strategy__info-item--active')
	})
}

function deleteAllActiveLetters() {
	let letters = document.querySelectorAll('.strategy__letter')

	letters?.forEach((letter) => {
		letter.classList.remove('strategy__letter--active')
	})
}


//media popup
let clickBoxes = document.querySelectorAll('.strategy__title-wrapper')

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