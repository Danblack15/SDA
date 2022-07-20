export const initBtnSettings = (element) => {
    let buttons = element.querySelectorAll('.btn');
    if (buttons){
      buttons.forEach((btn) => {
        btn.insertAdjacentHTML('beforeend','<span></span>');
  
        btn.addEventListener('mouseover', (e) => {
          let btnCord = btn.getBoundingClientRect()
          let relX = (e.clientX - btnCord.left);
          let relY = (e.clientY - btnCord.top);
          let findEl = btn.querySelector('span');
          findEl.style.top = (String(relY+'px'));
          findEl.style.left = (String(relX+'px'));
        })
      })
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => initBtnSettings(document.body));
  