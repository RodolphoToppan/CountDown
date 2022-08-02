let futureDate = new Date('22 November 2022')

export default function Countdown() {
  setInterval(function time() {
    const actualDate = new Date()
    const distance = futureDate.getTime() - actualDate.getTime()

    const day = Math.floor(distance / (24 * 60 * 60 * 1000))
    const hour = Math.floor((distance / (60 * 60 * 1000)) % 24)
    const minute = Math.floor((distance / (60 * 1000)) % 60)
    const second = Math.floor((distance / 1000) % 60)

    const days = day < 10 ? '0' + day : day
    const hours = hour < 10 ? '0' + hour : hour
    const minutes = minute < 10 ? '0' + minute : minute
    const seconds = second < 10 ? '0' + second : second

    const substituteValues = [days, hours, minutes, seconds]
    const timeElements = document.querySelectorAll('div[id="data-time"')

    timeElements.forEach((element, index) => {
      element.innerHTML =
        index == 0 ? substituteValues[index] : ' : ' + substituteValues[index]
    })
  }, 1000)
}
Countdown()
