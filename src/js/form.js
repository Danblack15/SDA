import Form from './_validate'
import { addErrorMessage } from "./error-message";

export const inputsFunc = (element) => {
  const form = new Form(element.querySelector('.form'), {
    focusValidate: true,
    classes: {
      empty: 'form__input--empty',
      error: 'form__input-error',
      correct: 'form__input-success',
    },
    fields: [
      {
        selector: '[name="name"]',
        maxLength: 32,
        realTimeRegExp: 'name',
        realTime: true,
        required: true
      },
      {
        selector: '[name="phone"]',
        realTimeRegExp: 'phone',
        realTime: true,
        required: true,
        minLength: 12,
        mask: '+7**********'
      },
      {
        selector: '[name="email"]',
        regExp: 'email',
        realTime: true,
        required: true,
      },
      {
        selector: '[name="sogl"]',
        realTimeRegExp: 'sogl',
        realTime: true,
        required: true,
      }
    ]
  });

  form.on('submit', function (e) {
    e.preventDefault();

    let modal = document.querySelector('.modal-wrapper ')

    modal.classList.add('modal-wrapper--active')

    document.body.style.overflowY = "hidden"
  })

  const inputs = element.querySelectorAll('.form__input')

  inputs.forEach(el => {
    if (el.value && el.value !== '+7') {
      el.parentElement.querySelector('.form__input-label').classList.add('form__input-checked')
    } else {
      el.value = ""
      el.parentElement.querySelector('.form__input-label').classList.remove('form__input-checked')
    }

    el.addEventListener('blur', () => {
      let comment = el.parentElement.querySelector('.form__error-comment')

      if (el.classList.contains('form__input-error')) {
        el.parentElement.classList.remove('form__item-success')

        el.parentElement.classList.add('form__item-error')
        if (el.name === 'name') {
          comment.innerText = 'Неверно заполненное поле, нужны буквы'
        } else if (el.name === 'phone') {
          comment.innerText = 'Неверно заполненное поле, нужны ещё цифры'
        } else if (el.name === 'email') {
          comment.innerText = 'Неверно заполненное поле, нужна почта'
        }
      }
      else if (el.classList.contains('form__input-success')) {
        el.parentElement.classList.add('form__item-success')
        el.parentElement.classList.remove('form__item-error')

        if (el.parentElement.querySelector('.form__error-comment')) {
          comment.innerText = ''
        }
      } else if (el.classList.contains('form__input--empty')) {
        el.parentElement.classList.remove('form__item-success')
      } else {
        el.value = "";
        el.parentElement.querySelector('.form__input-label').classList.remove('form__input-checked')
        if (el.parentElement.classList.contains('form__item-success')) {
          el.parentElement.classList.remove('form__item-success')
        }
        if (el.parentElement.classList.contains('form__item-error')) {
          el.parentElement.classList.remove('form__item-error')
        }
      }

      if (el.parentElement.querySelector('.form__error-comment')) {
        addErrorMessage()
      }
    })

    el.addEventListener('input', () => {
      let comment = el.parentElement.querySelector('.form__error-comment')

      if (el.value) {
        el.parentElement.querySelector('.form__input-label').classList.add('form__input-label--cheked');
        el.parentElement.classList.remove('form__item-success')
        if (el.parentElement.querySelector('.form__error-comment')) {
          comment.innerText = ''
        }
      } else {
        el.parentElement.querySelector('.form__input-label').classList.remove('form__input-label--cheked')
        el.parentElement.classList.remove('form__item-error')
        if (el.parentElement.querySelector('.form__error-comment')) {
          comment.innerText = ''
        }
      }
    })
  })
}

window.inputsFuncGlobal = (el) => {
  inputsFunc(el)
}

document.addEventListener('DOMContentLoaded', () => inputsFunc(document.querySelector('.contacts')));
