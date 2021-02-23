/*
This file contains core DOM manipulation functions.
*/

/* update the given progressbar percentage.

we assume the elm is a progressbar and has `w-xx` className at the end.
*/
const updateProgressbar = (elm, newPercentage) => {
  elm.classList.remove(elm.classList[elm.classList.length - 1])
  elm.classList.add('w-' + newPercentage)
}

/* update the given report span */
const updateReportSpan = (elm, totalPages, remainedPages) => {
  elm.innerHTML =
    (totalPages - remainedPages) +
    ' out of ' +
    totalPages +
    ' pages, remained ' +
    remainedPages +
    ' pages'
}

export { updateProgressbar, updateReportSpan }
