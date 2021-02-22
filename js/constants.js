/* 
This file contains core constants.
*/

import { getPagesCount } from './math'

// subjectName: {first: (first page num),  last: (last page num)}
const pages = {
  math: { first: 6, last: 87 },
  phys: { first: 155, last: 90 },
  chem: { first: 231, last: 162 },
  biol: { first: 302, last: 234 },
}

// Pages count as const to avoid recalculating.
const pagesCount = {
  math: getPagesCount(pages.math),
  phys: getPagesCount(pages.phys),
  chem: getPagesCount(pages.chem),
  biol: getPagesCount(pages.biol),
}

// Total pages count based on the above constants.
const totalPagesCount = pagesCount.values().reduce((a, b) => a + b)

// All.
export { pages, pagesCount, totalPagesCount }
