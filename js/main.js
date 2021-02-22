/*
This file contains the main website logic 
+ DOM manipulation.
*/

import { pages } from './constants'
import { onChangeHandlers, onBlurHandlers } from './handlers'

// Tracker.
var currentPages = {
  math: pages.math.first,
  phys: pages.phys.first,
  chem: pages.chem.first,
  biol: pages.biol.first,
}

document.onload = () => {
  /* Load stored page nums if any */
  var cache
  for (const subject in currentPages) {
    cache = localStorage.getItem(subject)
    if (cache) {
      currentPages[subject] = cache
    }
  }

  /* Add event listeners */
  const pagesInputs = document.getElementsByClassName('pages-input')
  pagesInputs.forEach((elm) => {
    elm.addEventListener('change', (evt) => handleChange(evt, elm.id))
    elm.addEventListener('blur', (evt) => handleBlur(elm.id))
  })
}

/* Global input onChange handler */
const handleChange = (evt, elemID) => {
  switch (elemID) {
    case 'math-input':
      onChangeHandlers.math(evt, currentPages)
      break

    case 'phys-input':
      onChangeHandlers.phys(evt, currentPages)
      break

    case 'chem-input':
      onChangeHandlers.chem(evt, currentPages)
      break

    case 'biol-input':
      onChangeHandlers.biol(evt, currentPages)
      break

    default:
      console.log('Invalid Input ID: ' + elemID)
      return
  }
}

/* Global input onBlur handler */
const handleBlur = (elemID) => {
  switch (elemID) {
    case 'math-input':
      onBlurHandlers.math(currentPages)
      break

    case 'phys-input':
      onBlurHandlers.phys(currentPages)
      break

    case 'chem-input':
      onBlurHandlers.chem(currentPages)
      break

    case 'biol-input':
      onBlurHandlers.biol(currentPages)
      break

    default:
      console.log('Invalid Input ID: ' + elemID)
      return
  }
}
