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
  Math.floor(((subjectPagesCount - remainedPages) / subjectPagesCount) * 100)

/* Calculate date days delta */
const getDaysDelta = (dateA, dateB) =>
  Math.floor((dateB.getTime() - dateA.getTime()) / (1000 * 60 * 60 * 24))

/* Calculate pages per day */
const getPagesPerDay = (totalRemaindedPages, daysDelta) =>
  Math.ceil(totalRemaindedPages / (daysDelta > 0 ? daysDelta : 1))

// All.
export {
  getPagesCount,
  getRemainedPages,
  getDonePercentage,
  getDaysDelta,
  getPagesPerDay,
}
