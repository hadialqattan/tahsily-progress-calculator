/*
This file contains core DOM manipulation functions.
*/

import { getTotalRemainder } from './state.js'
import { getPagesPerDay } from './math.js'

/* update the given progressbar percentage.

we assume the elm is a progressbar and has `w-xx` className at the end.
*/
const updateProgressbar = (elm, newPercentage) => {
  elm.classList.remove(elm.classList[elm.classList.length - 1])
  elm.classList.add('w-' + newPercentage)
}

/* update subject-input value span */
const updateInputValueSpan = (elm, currentValue) => {
  elm.innerHTML = 'last page: ' + currentValue
}

/* update the given report span */
const updateReportSpan = (elm, totalPages, remainedPages) => {
  elm.innerHTML =
    totalPages -
    remainedPages +
    ' out of ' +
    totalPages +
    ' pages, remained ' +
    remainedPages +
    (remainedPages > 1 ? ' pages' : ' page')
}

/* update the given date remainder span */
const updateDateRemainderSpan = (elm, daysDelta) => {
  let pagePerDay = getPagesPerDay(getTotalRemainder(), daysDelta)
  let shouldStudy =
    'study ' + pagePerDay + (pagePerDay > 1 ? ' pages' : ' page') + '/day'
  let remainderDays =
    daysDelta + (daysDelta > 1 ? ' days' : ' day') + ' remained'
  elm.innerHTML = shouldStudy + ', ' + remainderDays
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
