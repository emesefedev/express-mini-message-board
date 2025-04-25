function formatDate(date) {
  const formattedDate = `${date.getDay()} ${date.toLocaleString('en-GB', { month: 'short' })} ${date.getFullYear()}`
  const formattedTime = `${date.getHours()}:${date.getMinutes()}`

  return `${formattedDate} ${formattedTime}`
}

module.exports = { formatDate }