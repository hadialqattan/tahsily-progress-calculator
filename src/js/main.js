/*
This file contains the main website logic 
+ DOM manipulation.
*/

import { tomorrowFormattedDate, userAgreement } from './constants.js'
import {
  updateProgressbar,
  updateReportSpan,
  updateSettingsInput,
} from './dom.js'
import {
  updateSubject,
  updateDate,
  onInputHandlers,
  onChangeHandlers,
  onClickHandlers,
} from './handlers.js'
import {
  setCurrent,
  getPercentagesAvg,
  getTotalRemainder,
  getCurrent,
  setDate,
  getDate,
  refreshCounters,
  getTotalPagesCount,
  setPageConstant,
  pages,
} from './state.js'

// Main Entry point
window.onload = () => {
  /* Scroll to top smoothly */
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })

  /* Workaround to disable DarkReader */
  for (const style of document.head.getElementsByClassName('darkreader')) {
    style.remove()
  }

  /* Force user-agreement */
  if (localStorage.getItem(userAgreement.v1_0) != userAgreement.agreed) {
    $('#userAgreementModal').modal('show') // JQuery: line 1 of 2
  }
  document.getElementById('agree-btn').addEventListener('click', () => {
    localStorage.setItem(userAgreement.v1_0, userAgreement.agreed)
    $('#userAgreementModal').modal('hide') // JQuery: line 2 of 2
  })

  /* Settings panel save button */
  document
    .getElementById('save-settings')
    .addEventListener('click', () => handleClick('settings'))

  /* --- Pages state (general) --- */
  var cache, inputSlider

  /* --- First/Last pages state --- */
  for (const subject in pages) {
    /* Load stored first/last page nums if any */
    for (const type in pages[subject]) {
      cache = localStorage.getItem(subject + '-' + type)
      if (cache) {
        setPageConstant(subject, type, cache)
        updateSettingsInput(subject, type, cache)
      } else {
        updateSettingsInput(subject, type, pages[subject][type])
      }
    }
  }
  refreshCounters()

  /* Add event listeners */
  const firstInputFields = document.getElementsByClassName('first-input-field')
  for (const elm of firstInputFields) {
    elm.addEventListener('change', () => handleChange(elm.id))
  }

  /* --- Currect pages state --- */
  for (const subject in pages) {
    /* Load stored page nums if any */
    cache = localStorage.getItem(subject)
    if (cache) {
      setCurrent(subject, cache)
    }

    /* Get input slider by DOM */
    inputSlider = document.getElementById(subject + '-input')

    /* Set input slider min/max properties */
    inputSlider.min = pages[subject].first - 1
    inputSlider.max = pages[subject].last

    /* Update input slider value */
    inputSlider.value = getCurrent(subject)

    /* Update subject state and display data */
    updateSubject(subject, getCurrent(subject))
  }

  /* --- Dates state --- */
  for (const datetype of ['target', 'test']) {
    /* Load stored dates if any */
    cache = localStorage.getItem(datetype + 'date')
    if (cache) {
      setDate(datetype, cache)
    }

    /* Update input date value */
    let dateInput = document.getElementById(datetype + 'date-input')
    dateInput.value = getDate(datetype)
    dateInput.min = tomorrowFormattedDate

    /* Update date state and display data */
    updateDate(datetype, getDate(datetype))
  }

  /* Add event listeners */
  const inputFields = document.getElementsByClassName('input-field')
  for (const elm of inputFields) {
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
  let percentagesAvg = getPercentagesAvg()
  updateProgressbar(totalProgressbar, percentagesAvg)
  updateReportSpan(totalReport, getTotalPagesCount(), getTotalRemainder())

  // Celebrate!
  if (percentagesAvg == 100) {
    party.screen()
  }
}

/* Global input onInput handler */
const handleInput = (evt, elemID) => {
  switch (elemID) {
    case 'targetdate-input':
      onInputHandlers.targetDate(evt)
      return

    case 'testdate-input':
      onInputHandlers.testDate(evt)
      return

    default:
      break
  }

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
    case 'targetdate-input':
      onChangeHandlers.targetDate()
      return

    case 'testdate-input':
      onChangeHandlers.testDate()
      return

    default:
      break
  }

  switch (elemID) {
    case 'math-input':
      onChangeHandlers.math()
      return

    case 'phys-input':
      onChangeHandlers.phys()
      return

    case 'chem-input':
      onChangeHandlers.chem()
      return

    case 'biol-input':
      onChangeHandlers.biol()
      return

    default:
      break
  }

  switch (elemID) {
    case 'math-first':
      onChangeHandlers.mathFirst()
      return

    case 'phys-first':
      onChangeHandlers.physFirst()
      return

    case 'chem-first':
      onChangeHandlers.chemFirst()
      return

    case 'biol-first':
      onChangeHandlers.biolFirst()
      return

    default:
      console.log('Invalid Input ID: ' + elemID)
      return
  }
}

/* Global input onClick handler */
const handleClick = (elemID) => {
  switch (elemID) {
    case 'settings':
      onClickHandlers.settings()
      return

    default:
      console.log('Invalid Input ID: ' + elemID)
      return
  }
}