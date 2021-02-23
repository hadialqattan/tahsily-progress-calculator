/*
This file contains the main website logic 
+ DOM manipulation.
*/

import { pages, totalPagesCount } from './constants.js'
import { updateProgressbar, updateReportSpan } from './dom.js'
import { updateSubject, onChangeHandlers, onBlurHandlers } from './handlers.js'
import {
  setCurrent,
  getPercentagesAvg,
  getTotalRemainder,
  getCurrent
} from './state.js'

// Main Entry point
window.onload = () => {
  var cache
  for (const subject in pages) {
    /* Load stored page nums if any */
    cache = localStorage.getItem(subject)
    if (cache) {
      setCurrent(subject, cache)
    }

    /* Update input slider value */
    document.getElementById(subject+'-input').value = getCurrent(subject)

    /* Update subject state and display data */
    updateSubject(subject, getCurrent(subject))
  }

  /* Add event listeners */
  const pagesInputs = document.getElementsByClassName('pages-input')
  for (const elm of pagesInputs) {
    elm.addEventListener('change', (evt) => handleChange(evt, elm.id))
    elm.addEventListener('blur', (evt) => handleBlur(elm.id))
  }

  /* Total frame */
  updateTotal()
}

/* Total status (progressbar + report updater) */
const updateTotal = () => {
  let totalProgressbar = document.getElementById('total-progress')
  let totalReport = document.getElementById('total-report')
  updateProgressbar(totalProgressbar, getPercentagesAvg())
  updateReportSpan(totalReport, totalPagesCount, getTotalRemainder())
}

/* Global input onChange handler */
const handleChange = (evt, elemID) => {
  switch (elemID) {
    case 'math-input':
      onChangeHandlers.math(evt)
      break

    case 'phys-input':
      onChangeHandlers.phys(evt)
      break

    case 'chem-input':
      onChangeHandlers.chem(evt)
      break

    case 'biol-input':
      onChangeHandlers.biol(evt)
      break

    default:
      console.log('Invalid Input ID: ' + elemID)
      return
  }

  /* Total frame */
  updateTotal()
}

/* Global input onBlur handler */
const handleBlur = (elemID) => {
  switch (elemID) {
    case 'math-input':
      onBlurHandlers.math()
      break

    case 'phys-input':
      onBlurHandlers.phys()
      break

    case 'chem-input':
      onBlurHandlers.chem()
      break

    case 'biol-input':
      onBlurHandlers.biol()
      break

    default:
      console.log('Invalid Input ID: ' + elemID)
      return
  }
}
