/* 
This file contains onInput and onChange handlers.
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

export const onInputHandlers = {
  math: (evt) => {
    updateSubject('math', evt.target.value)
  },
  phys: (evt) => {
    updateSubject('phys', evt.target.value)
  },
  chem: (evt) => {
    updateSubject('chem', evt.target.value)
  },
  biol: (evt) => {
    updateSubject('biol', evt.target.value)
  },
}

const updateLocalStorage = (subj) =>
  localStorage.setItem(subj, getCurrent(subj))

export const onChangeHandlers = {
  math: () => {
    updateLocalStorage('math')
  },
  phys: () => {
    updateLocalStorage('phys')
  },
  chem: () => {
    updateLocalStorage('chem')
  },
  biol: () => {
    updateLocalStorage('biol')
  },
}
