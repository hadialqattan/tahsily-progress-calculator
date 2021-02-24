/*
This file contains user's state object.
*/

import { pages, pagesCount } from './constants.js'
import { getDonePercentage, getRemainedPages } from './math.js'

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
