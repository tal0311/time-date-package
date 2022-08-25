'use strict'

console.log(
  '%c Formatted time-date is online',
  'background: #222; color: #bada55'
)

function getFormattedTime(type, sep, date = Date.now()) {
  date = new Date(date)
  switch (type) {
    case 'Array':
      return _getTimeAsArray(date)
    case 'HH:MM:SS':
      return _getTimeByHMS(type, sep, date)
    case 'HH:MM':
      return _getTimeByHMS(type, sep, date)
    case 'AM/PM':
      return _getLocalTime(type, sep, date)
    case 'MM/DD/YYYY':
      return _getLocalTime(type, sep, date)
    case 'DD/MM/YYYY':
      return _getTimeByDMY(type, sep, date)
    default:
      break
  }
}
// Private functions start here
function _getTimeAsArray(date) {
  date = date.toString()
  date = date.split(' ')
  date = date.splice(0, 5)
  return date
}

function _getTimeByHMS(type, sep = ':', time) {
  const hours =
    time.getHours() > 9
      ? time.getHours().toString()
      : time.getHours().toString().padStart(2, '0')
  const minutes =
    time.getMinutes() > 9
      ? time.getMinutes().toString()
      : time.getMinutes().toString().padStart(2, '0')
  const secondes =
    time.getSeconds() > 9
      ? time.getSeconds().toString()
      : time.getSeconds().toString().padStart(2, '0')

  if (type === 'HH:MM:SS') {
    return `${hours}${sep}${minutes}${sep}${secondes}`
  }
  if (type === 'HH:MM') {
    return `${hours}${sep}${minutes}`
  }
}

function _getLocalTime(type, sep = '/', time) {
  if (type === 'AM/PM') {
    return time.toLocaleTimeString().replaceAll(':', sep)
  }
  if (type === 'MM/DD/YYYY') {
    return time.toLocaleDateString().replaceAll('/', sep)
  }
}

function _getTimeByDMY(type, sep = '/', time) {
  return `${time.getDate()}${sep}${
    time.getMonth() + 1
  }${sep}${time.getFullYear()}`
}

export default getFormattedTime
