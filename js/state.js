/*
This file contains user's state object.
*/

import { getDonePercentage, getRemainedPages, getPagesCount } from './math.js'

/* Initial first/last page const and counters */

// subjectName: {first: (first page num),  last: (last page num)}
const pages = {
  math: { first: 6, last: 87 },
  phys: { first: 90, last: 155 },
  chem: { first: 160, last: 231 },
  biol: { first: 234, last: 302 },
}

// First/last pages setter.
const setPageConstant = (subject, type, value) => (pages[subject][type] = value)

// Pages count as const to avoid recalculating.
const pagesCount = {
  math: getPagesCount(pages.math),
  phys: getPagesCount(pages.phys),
  chem: getPagesCount(pages.chem),
  biol: getPagesCount(pages.biol),
}

// Total pages count based on the above constants.
var totalPagesCount = Object.values(pagesCount).reduce((a, b) => a + b)

// totalPagesCount's getter
const getTotalPagesCount = () => totalPagesCount

// Refresh all counters
const refreshCounters = () => {
  for (const subj in pagesCount) {
    pagesCount[subj] = getPagesCount(pages[subj])
  }
  totalPagesCount = Object.values(pagesCount).reduce((a, b) => a + b)
}

/* Initial pages state */
const pagesState = {
  math: {
    current: pages.math.first - 1,
    percentage: 0,
    remained: 0,
  },
  phys: {
    current: pages.phys.first - 1,
    percentage: 0,
    remained: 0,
  },
  chem: {
    current: pages.chem.first - 1,
    percentage: 0,
    remained: 0,
  },
  biol: {
    current: pages.biol.first - 1,
    percentage: 0,
    remained: 0,
  },
}

const updatePercentage = (subj) => {
  pagesState[subj].percentage = getDonePercentage(
    pagesCount[subj],
    pagesState[subj].remained
  )
}

const updateRemained = (subj) => {
  pagesState[subj].remained = getRemainedPages(
    pagesState[subj].current,
    pages[subj],
    pagesCount[subj]
  )
}

const setCurrent = (subj, currentPage, update = false) => {
  pagesState[subj].current = currentPage
  if (update) {
    updateRemained(subj)
    updatePercentage(subj)
  }
}

const getCurrent = (subj) => pagesState[subj].current

const getPercentage = (subj) => pagesState[subj].percentage

const getRemained = (subj) => pagesState[subj].remained

const getPercentagesAvg = () => {
  let sum = 0
  let i = 0
  for (const subj in pagesState) {
    sum += pagesState[subj].percentage
    i++
  }
  return Math.round(sum / i)
}

const getTotalRemainder = () => {
  let sum = 0
  for (const subj in pagesState) {
    sum += pagesState[subj].remained
  }
  return sum
}

/* Initial dates state */
const datesState = {
  target: '',
  test: '',
}

const setDate = (datetype, value) => (datesState[datetype] = value)

const getDate = (datetype) => datesState[datetype]

// Export only setters and getter.
export {
  // first/last pages & counters
  pages,
  setPageConstant,
  pagesCount,
  getTotalPagesCount,
  refreshCounters,
  // pages state.
  setCurrent,
  updatePercentage,
  updateRemained,
  getCurrent,
  getPercentage,
  getRemained,
  getPercentagesAvg,
  getTotalRemainder,
  // dates state.
  setDate,
  getDate,
}
