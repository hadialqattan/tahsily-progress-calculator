/* 
This file contains onInput and onChange handlers.
*/

import { getDaysDelta } from './math.js'
import { todayDate, pagesCount } from './constants.js'
import {
  updateProgressbar,
  updateInputValueSpan,
  updateReportSpan,
  updateDateRemainderSpan,
} from './dom.js'
import {
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
  targetDate: () => {
    updateDateLocalStorage('targetdate')
  },
  testDate: () => {
    updateDateLocalStorage('testdate')
  },
}

const unmute_icon = document.getElementById('unmute-icon')
const mute_icon = document.getElementById('mute-icon')
export const setMusicControllerIcon = (isPlaying) => {
  if (isPlaying) {
    unmute_icon.style.display = 'initial'
    mute_icon.style.display = 'none'
  } else {
    unmute_icon.style.display = 'none'
    mute_icon.style.display = 'initial'
  }
}

export const onClickHandlers = {
  unmute: (music) => {
    let isPlaying = music.playing()
    if (isPlaying) {
      music.stop()
      isPlaying = !isPlaying
    } else {
      music.play()
      isPlaying = !isPlaying
    }
    localStorage.setItem('music', isPlaying)
    setMusicControllerIcon(isPlaying)
  },
}
