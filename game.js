let lastRenderTime = 0

function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart')) {
      window.location = '/'
    }
    return
  }


  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
  lastRenderTime = currentTime
  console.log(secondsSinceLastRender)
}

window.requestAnimationFrame(main)