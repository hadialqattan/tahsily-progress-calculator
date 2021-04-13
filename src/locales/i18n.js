/*
This file contains localization login using I18Next framework.
*/

import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationsEN from './en.json'
import translationsAR from './ar.json'

const resources = {
  en: {
    translation: translationsEN,
  },
  ar: {
    translation: translationsAR,
  },
}

i18n
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en', // default language
  })
  .then(function (t) {
    Array.from(document.getElementsByClassName('i18n')).forEach((elm) => {
      let i18nT = i18n.t(elm.getAttribute('data-i18n'))
      if (elm.nodeName == 'META') {
        elm.setAttribute('content', i18nT)
      } else {
        elm.innerHTML = i18nT
      }
    })
    Array.from(document.getElementsByClassName('dir')).forEach((elm) => {
      elm.dir = i18n.dir()
    })
  })

export default i18n
