/* 
This file contains onChange and onBlur handlers.
*/

import { getRemainedPages, getDonePercentage } from './math'
import { pages, pagesCount, totalPagesCount } from './constants'

export const updateTotal = (currentPages) => {
  let totalProgressbar = document.getElementById('total-progress')
  let totalReport = document.getElementById('total-report')

  let classListLength = totalProgressbar.classList.length
  totalProgressbar.classList[classListLength - 1] = 70
}

export const onChangeHandlers = {
  math: (evt, currentPages) => {},
  phys: (evt, currentPages) => {},
  chem: (evt, currentPages) => {},
  biol: (evt, currentPages) => {},
}

export const onBlurHandlers = {
  math: (currentPages) => {
    localStorage.setItem('math', currentPages.math)
  },
  phys: (currentPages) => {
    localStorage.setItem('phys', currentPages.phys)
  },
  chem: (currentPages) => {
    localStorage.setItem('chem', currentPages.chem)
  },
  biol: (currentPages) => {
    localStorage.setItem('biol', currentPages.biol)
  },
}
