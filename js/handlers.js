/* 
This file contains onInput and onChange handlers.
*/

import { getDaysDelta } from './math.js'
import { todayDate } from './constants.js'
import {
  updateProgressbar,
  updateInputValueSpan,
  updateReportSpan,
  updateDateRemainderSpan,
} from './dom.js'
import {
  pages,
  pagesCount,
  setPageConstant,
  setCurrent,
  getCurrent,
  getPercentage,
  getRemained,
  setDate,
  getDate,
} from './state.js'

export const updateSubject = (subj, currentValue) => {
  // Update state.
  setCurrent(subj, currentValue, true)

  // Update display data.
  let currentValueSpan = document.getElementById(subj + '-input-value')
  let progressbar = document.getElementById(subj + '-progress')
  let reportSpan = document.getElementById(subj + '-report')
  updateInputValueSpan(currentValueSpan, currentValue)
  updateProgressbar(progressbar, getPercentage(subj))
  updateReportSpan(reportSpan, pagesCount[subj], getRemained(subj))
}

export const updateDate = (datetype, currentDate) => {
  // Update state.
  setDate(datetype, currentDate)

  // Update display data.
  updateDateDisplay(datetype, currentDate)
}

const updateDateDisplay = (datetype, currentDate) => {
  updateDateRemainderSpan(
    document.getElementById(datetype + 'date-remained'),
    getDaysDelta(todayDate, new Date(currentDate))
  )
}

const refreshAllDatesDisplay = () => {
  updateDateDisplay('target', new Date(getDate('target')))
  updateDateDisplay('test', new Date(getDate('test')))
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
  targetDate: (evt) => {
    updateDate('target', evt.target.value)
  },
  testDate: (evt) => {
    updateDate('test', evt.target.value)
  },
}

const updateLastInputMinProp = (subj) =>
  (document.getElementById(subj + '-last').min =
    parseInt(document.getElementById(subj + '-first').value) + 1)

const updateSubjectLocalStorage = (subj) =>
  localStorage.setItem(subj, getCurrent(subj))

const updateDateLocalStorage = (datetype) =>
  localStorage.setItem(
    datetype,
    getDate(datetype.substring(0, datetype.length - 4))
  )

export const onChangeHandlers = {
  math: () => {
    refreshAllDatesDisplay()
    updateSubjectLocalStorage('math')
  },
  phys: () => {
    refreshAllDatesDisplay()
    updateSubjectLocalStorage('phys')
  },
  chem: () => {
    refreshAllDatesDisplay()
    updateSubjectLocalStorage('chem')
  },
  biol: () => {
    refreshAllDatesDisplay()
    updateSubjectLocalStorage('biol')
  },
  mathFirst: () => {
    updateLastInputMinProp('math')
  },
  physFirst: () => {
    updateLastInputMinProp('phys')
  },
  chemFirst: () => {
    updateLastInputMinProp('chem')
  },
  biolFirst: () => {
    updateLastInputMinProp('biol')
  },
  targetDate: () => {
    updateDateLocalStorage('targetdate')
  },
  testDate: () => {
    updateDateLocalStorage('testdate')
  },
}

const updatePageConstantLocalStorage = (subject, type, value) =>
  localStorage.setItem(subject + '-' + type, value)

export const onClickHandlers = {
  settings: () => {
    // Store new settings into the LocalStorage
    // + update the input elem
    // + update the page.{subject}.{type} constant
    // + update current page in localStorage
    let cache, inputElm
    for (const subj in pages) {
      for (const type in pages[subj]) {
        inputElm = document.getElementById(subj + '-' + type)
        cache = parseInt(inputElm.value)
        if (!isNaN(cache) && cache != pages[subj][type]) {
          cache = cache >= inputElm.min ? cache : inputElm.min
          inputElm.value = cache
          updatePageConstantLocalStorage(subj, type, cache)
          setPageConstant(subj, type, cache)
        }
      }
    }
    // Update the subject's current page only if it's current value
    // less than the first page or greater than the last page.
    for (const subj in pages) {
      cache = document.getElementById(subj + '-input').value
      if (cache < pages[subj].first || cache > pages[subj].last) {
        if (cache < pages[subj].first) {
          cache = pages[subj].first - 1
        } else {
          cache = pages[subj].last
        }
        updateSubject(subj, cache)
        updateSubjectLocalStorage(subj)
      }
    }
    // Refresh everything!
    window.onload()
    // Close/hide settings modal.
    document.getElementById('close-settings').click()
  },
}
