const played = []

const showPlayedKeys = (e) => {

  const playedKeys = document.querySelector('#played')

  played.push(e.key.toUpperCase())
  played.join(" ")


  console.log(played)
  playedKeys.innerHTML = played.join(" ")


}

const playSound = (e) => {
  window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add('playing')

    if (!audio) {
      return;
    }

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


const keys = document.querySelectorAll(".key")
keys.forEach(key => {
  key.addEventListener('transitionend', removeTranstion)
  window.addEventListener('keydown', playSound)

})
