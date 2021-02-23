/*
This file contains user's state object.
*/

import { pages, pagesCount } from './constants.js'
import { getDonePercentage, getRemainedPages } from './math.js'

/* Initial state */
const currentState = {
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
  currentState[subj].percentage = getDonePercentage(
    pagesCount[subj],
    currentState[subj].remained
  )
}

const updateRemained = (subj) => {
  currentState[subj].remained = getRemainedPages(
    currentState[subj].current,
    pages[subj],
    pagesCount[subj]
  )
}

const setCurrent = (subj, currentPage, update = false) => {
  currentState[subj].current = currentPage
  if (update) {
    updateRemained(subj)
    updatePercentage(subj)
  }
}

const getCurrent = (subj) => currentState[subj].current

const getPercentage = (subj) => currentState[subj].percentage

const getRemained = (subj) => currentState[subj].remained

const getPercentagesAvg = () => {
  let sum = 0
  let i = 0
  for (const subj in currentState) {
    sum += currentState[subj].percentage
    i++
  }
  return Math.round(sum / i)
}

const getTotalRemainder = () => {
  let sum = 0
  for (const subj in currentState) {
    sum += currentState[subj].remained
  }
  return sum
}

// Export only setters and getter.
export {
  setCurrent,
  updatePercentage,
  updateRemained,
  getCurrent,
  getPercentage,
  getRemained,
  getPercentagesAvg,
  getTotalRemainder,
}
