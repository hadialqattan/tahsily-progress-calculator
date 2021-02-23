/* 
This file contains core constants.
*/

import { getPagesCount } from './math.js'

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
export { pages, pagesCount, totalPagesCount }
