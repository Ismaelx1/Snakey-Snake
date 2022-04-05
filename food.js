import { onSnake, expandSnake} from './snake.js'
import {randomGrid} from './grid.js'


const random1 = Math.floor(Math.random() * 256)
const random2 = Math.floor(Math.random() * 256)
const random3 = Math.floor(Math.random() * 256)
const bgvalue = `rgb(${random1}, ${random2}, ${random3})`
const foody = document.querySelector('.food')
const score = document.querySelector("#score");

let food = randomFood()

const EXPANSION_RATE = 1;
score.innerHTML = 0;
var value = 0

export function update() {
if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = randomFood()
    value++;
    score.innerHTML = value;
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

export function colorFood() {
foody.style.backgroundColor = bgvalue

}