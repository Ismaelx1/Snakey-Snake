import { onSnake, expandSnake} from './snake.js'
import {randomGrid} from './grid.js'

let food = randomFood()

const EXPANSION_RATE = 1;

export function update() {
if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = randomFood()
}
}

export function draw(gameBoard) {
 
            const foodElement = document.createElement('div')
            foodElement.style.gridColumnStart = food.x
            foodElement.style.gridRowStart = food.y
            foodElement.classList.add('food')
            gameBoard.appendChild(foodElement)


}

function randomFood() {
    let newFoodPos

    while (newFoodPos == null || onSnake(newFoodPos)) {
        newFoodPos = randomGrid()
    }
    return newFoodPos

}