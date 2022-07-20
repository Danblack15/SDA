export const addErrorMessage = () => {
    let errorMessages = document.querySelectorAll('.form__error-comment');
    if (errorMessages){
      errorMessages.forEach((el) => {
        if (el.closest('form').parentElement.offsetWidth <= 780){
          el.style.right = '-2%'
        }
      })
    }
  }
  