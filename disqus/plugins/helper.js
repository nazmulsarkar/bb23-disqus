const helper = {}

helper.convertTimetoInt = (date) => {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return parseInt(hours) * 60 + parseInt(minutes)
}

export default helper
