export default function Countdown() {
  const dataTime = document.querySelectorAll('data-time')
  let actualDate = new Date(),
    futureDate = new Date('21 December 2022'),
    distance = futureDate.getTime() - actualDate.getTime()

  setInterval(function time() {
    let days =
      Math.floor(distance / (24 * 60 * 60 * 1000)) < 10 ? '0' + days : this.days
    let hours =
      Math.floor((distance / (60 * 60 * 1000)) % 24) < 10
        ? '0' + this.hours
        : this.hours
    let minutes =
      Math.floor((distance / (60 * 1000)) % 60) < 10
        ? '0' + this.minutes
        : this.minutes
    let seconds =
      Math.floor((distance / 1000) % 60) < 10
        ? '0' + this.seconds
        : this.seconds
  }, 1000)

  Countdown()

  function Display() {
    let Display = document
      .getElementById('data-time')
      .innerHTML(days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds)
    Display()
  }
}
