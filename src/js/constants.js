/* 
This file contains core constants.
*/

// Date related constant.
const todayDate = new Date()
const dd = todayDate.getDate(),
  mm = todayDate.getMonth() + 1,
  yyyy = todayDate.getFullYear()
const tomorrowFormattedDate =
  yyyy +
  '-' +
  (mm.toString().length < 2 ? '0' + mm : mm) +
  '-' +
  (dd.toString().length < 2 ? '0' + (dd + 1) : dd + 1)

// User agreement versions.
const userAgreement = { v1_0: 'user-agreement-v1.0', agreed: 'agreed' }

// All.
export { todayDate, tomorrowFormattedDate, userAgreement }
