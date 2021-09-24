const tabsHandlerElemes = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElemes = document.querySelectorAll('[data-tabs-field]')

for (let btn of tabsHandlerElemes) {
  btn.addEventListener('click', () => {
    tabsHandlerElemes.forEach(item => item.classList.remove('design-list__item_active'))
    btn.classList.add('design-list__item_active')
    
    tabsContentElemes.forEach(content => {
      if (content.dataset.tabsFieder === btn.dataset.tabsHandler) {
        content.classList.remove('hidden')
      } else {
        content.classList.add('hidden')
     }
    })
  
    })

}