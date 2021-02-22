/* 
This file contains core math functions.
*/

/* Get pages count of given subjectPages. */
const getPagesCount = (subjectPages) =>
  subjectPages.last - subjectPages.first + 1

/* Calculate remained pages based on currect page */
const getRemainedPages = (currentPageNum, subjectPages, subjectPagesCount) =>
  subjectPagesCount - (currentPageNum - subjectPages.first + 1)

/* Calculate done percentage based on remained pages */
const getDonePercentage = (subjectPagesCount, remainedPages) =>
  ((subjectPagesCount - remainedPages) / subjectPagesCount) * 100

// All.
export { getPagesCount, getRemainedPages, getDonePercentage }
