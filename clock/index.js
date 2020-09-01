
const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const digitalTime = document.querySelector('.digital-time')

const setDate = () => {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const minutes = now.getMinutes()
  const minutesDegrees = ((minutes / 60) * 360) + 90
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
  const hours = now.getHours()
  const hoursDegrees = ((hours / 60) * 360) + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`


}

const setDigitalTime = () => {
  console.log(digitalTime)
  const digital = new Date()
  const digSeconds = digital.getSeconds()
  const digMinutes = digital.getMinutes()
  const digHours = digital.getHours()
  digitalTime.innerHTML = (digHours + " : " + digMinutes + " : " + digSeconds)
}

setInterval(setDate, 1000)
setInterval(setDigitalTime, 1000)
