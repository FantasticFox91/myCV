import i18Obj from "./translate.js";

const languageContainer = document.querySelector('.change-language');
const languageButtons = document.querySelectorAll('.change-language__button')
let lang = "en";

function getTranslate(language = lang) {
  const elementsTotranslate = document.querySelectorAll('[data-i18]');
  elementsTotranslate.forEach(element => {
    element.textContent = i18Obj[language][element.dataset.i18]
  })
  lang = language
}

languageContainer.addEventListener('click', (event) => {
  if(event.target.classList.contains('change-language__button')) {
    languageButtons.forEach(el => el.classList.remove('change-language__button--active'));
    event.target.classList.add('change-language__button--active');
    getTranslate(event.target.dataset.language);
  }
})
