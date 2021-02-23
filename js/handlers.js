/* 
This file contains onChange and onBlur handlers.
*/

import { setCurrent, getCurrent, getPercentage, getRemained } from './state.js'
import { updateProgressbar, updateReportSpan } from './dom.js'
import { pagesCount} from './constants.js'

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
    updateLocalStorage('math')
    updateSubject('math', evt.target.value)
  },
  phys: (evt) => {
    updateLocalStorage('phys')
    updateSubject('phys', evt.target.value)
  },
  chem: (evt) => {
    updateLocalStorage('chem')
    updateSubject('chem', evt.target.value)
  },
  biol: (evt) => {
    updateLocalStorage('biol')
    updateSubject('biol', evt.target.value)
  },
}
