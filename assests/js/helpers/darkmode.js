const bodyDOM = document.querySelector('body')
const buttonSwitch = document.querySelector('.navbar__toggle--darkmode-label')

function darkMode() {
  bodyDOM.classList.toggle('dark-mode')
}

buttonSwitch.addEventListener('click', darkMode)

export default darkMode