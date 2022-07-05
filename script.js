// Set the date we're counting down to
let countDownDate = new Date('Jul 13, 2022 15:37:25').getTime()

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime()

  // Find the distance between now and the count down date
  let distance = countDownDate - now

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Display the result in the element with id="demo"
  document.getElementById('js-clock').innerHTML =
    days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x)
    document.getElementById('js-clock').innerHTML = 'EXPIRED'
  }
}, 1000)

;(function () {
  var deadline = '2022/07/03 19:00'

  function pad(num, size) {
    var s = '0' + num
    return s.substr(s.length - size)
  }

  // fixes "Date.parse(date)" on safari
  function parseDate(date) {
    const parsed = Date.parse(date)
    if (!isNaN(parsed)) return parsed
    return Date.parse(date.replace(/-/g, '/').replace(/[a-z]+/gi, ' '))
  }

  function getTimeRemaining(endtime) {
    let total = parseDate(endtime) - Date.parse(new Date())
    let seconds = Math.floor((total / 1000) % 60)
    let minutes = Math.floor((total / 1000 / 60) % 60)
    let hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    let days = Math.floor(total / (1000 * 60 * 60 * 24))

    return { total, days, hours, minutes, seconds }
  }

  function clock(id, endtime) {
    let days = document.getElementById(id + '-days')
    let hours = document.getElementById(id + '-hours')
    let minutes = document.getElementById(id + '-minutes')
    let seconds = document.getElementById(id + '-seconds')

    var timeinterval = setInterval(function () {
      var time = getTimeRemaining(endtime)

      if (time.total <= 0) {
        clearInterval(timeinterval)
      } else {
        days.innerHTML = pad(time.days, 5)
        hours.innerHTML = pad(time.hours, 5)
        minutes.innerHTML = pad(time.minutes, 5)
        seconds.innerHTML = pad(time.seconds, 2)
      }
    }, 1000)
  }

  clock('js-clock', deadline)
})()
