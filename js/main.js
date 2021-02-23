/*
This file contains the main website logic 
+ DOM manipulation.
*/

import { pages, totalPagesCount } from './constants.js'
import { updateProgressbar, updateReportSpan } from './dom.js'
import { updateSubject, onInputHandlers, onChangeHandlers } from './handlers.js'
import {
  setCurrent,
  getPercentagesAvg,
  getTotalRemainder,
  getCurrent,
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
    document.getElementById(subject + '-input').value = getCurrent(subject)

    /* Update subject state and display data */
    updateSubject(subject, getCurrent(subject))
  }

  /* Add event listeners */
  const pagesInputs = document.getElementsByClassName('pages-input')
  for (const elm of pagesInputs) {
    elm.addEventListener('input', (evt) => handleInput(evt, elm.id))
    elm.addEventListener('change', () => handleChange(elm.id))
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

/* Global input onInput handler */
const handleInput = (evt, elemID) => {
  switch (elemID) {
    case 'math-input':
      onInputHandlers.math(evt)
      break

    case 'phys-input':
      onInputHandlers.phys(evt)
      break

    case 'chem-input':
      onInputHandlers.chem(evt)
      break

    case 'biol-input':
      onInputHandlers.biol(evt)
      break

    default:
      console.log('Invalid Input ID: ' + elemID)
      return
  }

  /* Total frame */
  updateTotal()
}

/* Global input onChange handler */
const handleChange = (elemID) => {
  switch (elemID) {
    case 'math-input':
      onChangeHandlers.math()
      break

    case 'phys-input':
      onChangeHandlers.phys()
      break

    case 'chem-input':
      onChangeHandlers.chem()
      break

    case 'biol-input':
      onChangeHandlers.biol()
      break

    default:
      console.log('Invalid Input ID: ' + elemID)
      return
  }
}
