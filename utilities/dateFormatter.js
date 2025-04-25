function formatDate(date) {
  const formattedDate = `${date.getDate()} ${date.toLocaleString('en-GB', { month: 'short' })} ${date.getFullYear()}`
  const formattedTime = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`

  return `${formattedDate} ${formattedTime}`
}

module.exports = { formatDate }