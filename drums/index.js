var playedKeys = []


const showPlayedKeys = (e) => {
  console.log(playedKeys, "test")

  // if (!audio) return
  // played.push(e.key.toUpperCase())
  // played.join(" ")
  // console.log(played)
  // playedKeys.innerHTML = played.join(" ")

}

const playSound = (e) => {
  window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add('playing')

    console.log(key, "key")
    var played = [{
      eventKey: key,
      eventAudio: audio
    }]


    playedKeys = [...played, { eventKey: key, eventAudio: audio }]
    audio.currentTime = 0
    audio.play()
  })
  showPlayedKeys(e)
}

const removeTranstion = (e) => {
  //  console.log(e)
  if (e.propertyName != 'transform') {

    return
  }
  e.target.classList.remove('playing')
}

const playAgain = (e) => {
  console.log(played, "test play again")


  played.forEach(key => console.log(key, "testing the key in play again"))
  playSound()
}
const button = document.querySelector("button")

button.addEventListener('click', playAgain)

const keys = document.querySelectorAll(".key")
keys.forEach(key => {
  key.addEventListener('transitionend', removeTranstion)
  window.addEventListener('keydown', playSound)

})
