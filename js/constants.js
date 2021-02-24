/* 
This file contains core constants.
*/

import { getPagesCount } from './math.js'

// Date related constant.
const todayDate = new Date()
const dd = todayDate.getDate(),
  mm = todayDate.getMonth() + 1,
  yyyy = todayDate.getFullYear()
const todayFormattedDate =
  yyyy +
  '-' +
  (mm.toString().length < 2 ? '0' + mm : mm) +
  '-' +
  (dd.toString().length < 2 ? '0' + dd : dd)

// subjectName: {first: (first page num),  last: (last page num)}
const pages = {
  math: { first: 6, last: 87 },
  phys: { first: 90, last: 155 },
  chem: { first: 162, last: 231 },
  biol: { first: 234, last: 302 },
}

// Pages count as const to avoid recalculating.
const pagesCount = {
  math: getPagesCount(pages.math),
  phys: getPagesCount(pages.phys),
  chem: getPagesCount(pages.chem),
  biol: getPagesCount(pages.biol),
}

// Total pages count based on the above constants.
const totalPagesCount = Object.values(pagesCount).reduce((a, b) => a + b)

// All.
export { todayDate, todayFormattedDate, pages, pagesCount, totalPagesCount }
