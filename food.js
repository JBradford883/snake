import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
const EXPANSION_RATE = 5
function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}