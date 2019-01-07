const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + [hour, minute, second].map(formatNumber).join(':')
}

const formatDate= date => {
  const month = date.getMonth() + 1 
  const day = date.getDate()
  return month+'月'+day+'日'
}

const addDate=(date, days)=> {
  var d = new Date(date);
  d.setDate(d.getDate() + days);
  var m = d.getMonth() + 1;
  return m + '月' + d.getDate() + '日'
} 

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  addDate: addDate
}
