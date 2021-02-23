/* 
This file contains onChange and onBlur handlers.
*/

import { setCurrent, getCurrent, getPercentage, getRemained } from './state.js'
import { updateProgressbar, updateReportSpan } from './dom.js'
import { pagesCount } from './constants.js'

export const updateSubject = (subj, currentValue) => {
  // Update state.
  setCurrent(subj, currentValue, true)

  // Update display data.
  let progressbar = document.getElementById(subj + '-progress')
  let reportSpan = document.getElementById(subj + '-report')
  updateProgressbar(progressbar, getPercentage(subj))
  updateReportSpan(reportSpan, pagesCount[subj], getRemained(subj))
}

const updateLocalStorage = (subj) =>
  localStorage.setItem(subj, getCurrent(subj))

export const onChangeHandlers = {
  math: (evt) => {
    updateSubject('math', evt.target.value)
    updateLocalStorage('math')
  },
  phys: (evt) => {
    updateSubject('phys', evt.target.value)
    updateLocalStorage('phys')
  },
  chem: (evt) => {
    updateSubject('chem', evt.target.value)
    updateLocalStorage('chem')
  },
  biol: (evt) => {
    updateSubject('biol', evt.target.value)
    updateLocalStorage('biol')
  },
}
