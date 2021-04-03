/*
This file contains core DOM manipulation functions.
*/

import i18n from '../locales/i18n.js'
import { getTotalRemainder } from './state.js'
import { getPagesPerDay } from './math.js'

/* Utilities (Unexported) */
const getPagesWord = (pagesCount) => {
  if (i18n.language == 'ar') {
    return pagesCount > 1 && pagesCount < 11 ? 'pages' : 'page'
  } else {
    return pagesCount > 1 ? 'pages' : 'page'
  }
}
const getDaysWord = (daysCount) => {
  if (i18n.language == 'ar') {
    return daysCount > 1 && daysCount < 11 ? 'days' : 'day'
  } else {
    return daysCount > 1 ? 'days' : 'day'
  }
}
const getWord = (func, arg) => {
  return i18n.t('words.' + func(arg))
}

/* update the given progressbar percentage.

we assume the elm is a progressbar and has `w-xx` className at the end.
*/
const updateProgressbar = (elm, newPercentage) => {
  elm.classList.remove(elm.classList[elm.classList.length - 1])
  elm.classList.add('w-' + newPercentage)
}

/* update subject-input value span */
const updateInputValueSpan = (elm, currentValue) => {
  elm.innerHTML = i18n.t('report.lastPage', { pageNum: currentValue })
}

/* update the given report span */
const updateReportSpan = (elm, totalPages, remainedPages) => {
  elm.innerHTML = i18n.t('report.subReport', {
    done: totalPages - remainedPages,
    total: totalPages,
    remained: remainedPages,
    pagesWord: getWord(getPagesWord, remainedPages),
  })
}

/* update the given date remainder span */
const updateDateRemainderSpan = (elm, daysDelta) => {
  let pagePerDay = getPagesPerDay(getTotalRemainder(), daysDelta)
  elm.innerHTML = i18n.t('report.date', {
    pages: pagePerDay,
    days: daysDelta,
    pagesWord: getWord(getPagesWord, pagePerDay),
    daysWord: getWord(getDaysWord, daysDelta),
  })
}

/* update settings' last/first page input fields */
const updateSettingsInput = (subject, type, value) => {
  document.getElementById(subject + '-' + type).value = value
}

export {
  updateProgressbar,
  updateInputValueSpan,
  updateReportSpan,
  updateDateRemainderSpan,
  updateSettingsInput,
}
