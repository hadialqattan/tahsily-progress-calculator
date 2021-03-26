/*
This file contains the main website logic 
+ DOM manipulation.
*/

import { tomorrowFormattedDate, pages, totalPagesCount } from './constants.js'
import { updateProgressbar, updateReportSpan } from './dom.js'
import {
  updateSubject,
  updateDate,
  onInputHandlers,
  onChangeHandlers,
  onClickHandlers,
  setMusicControllerIcon,
} from './handlers.js'
import {
  setCurrent,
  getPercentagesAvg,
  getTotalRemainder,
  getCurrent,
  setDate,
  getDate,
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

  /* Settings panel */
  document
    .getElementById('settings')
    .addEventListener('click', () => handleClick('settings'))

  /* Background music */
  let isUnmuted = JSON.parse(localStorage.getItem('music'))
  if (isUnmuted == null) {
    isUnmuted = true
    localStorage.setItem('music', isUnmuted)
  }
  const music = new Howl({
    src: [
      '../assets/Stunning-New-Universe-Fly-Through-Really-Puts-Things-Into-Perspective_128-kbps.mp3',
    ],
    autoplay: isUnmuted,
    loop: true,
    volume: 0.5,
  })
  document
    .getElementById('unmute')
    .addEventListener('click', () => handleClick('unmute', music))
  setMusicControllerIcon(isUnmuted)

  /* --- Pages state --- */
  var cache, inputSlider

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
  updateReportSpan(totalReport, totalPagesCount, getTotalRemainder())

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

/* Global input onClick handler */
const handleClick = (elemID, ifAny) => {
  switch (elemID) {
    case 'settings':
      onChangeHandlers.settings
      break

    case 'unmute':
      onClickHandlers.unmute(ifAny)
      break

    default:
      console.log('Invalid Input ID: ' + elemID)
      return
  }
}
