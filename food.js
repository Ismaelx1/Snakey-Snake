import { onSnake, expandSnake} from './snake.js'
import {randomGrid} from './grid.js'


const random1 = Math.floor(Math.random() * 256)
const random2 = Math.floor(Math.random() * 256)
const random3 = Math.floor(Math.random() * 256)
const bgvalue = `rgb(${random1}, ${random2}, ${random3})`
const foody = document.querySelector('.food')
const currentScore = document.querySelector("#current_score");
const highScore = document.querySelector("#high_score");
let currentScoreValue = 0;
let highScoreValue = 0;

let food = randomFood()

const EXPANSION_RATE = 1;

//keeping the current score data
sessionStorage.setItem("Score", currentScoreValue);
currentScore.innerHTML = `Score: ${sessionStorage.getItem("Score")}`;

//keeping the high score data
if(localStorage.getItem("High Score")){
    //checks the recent high score and displays on refresh
    highScoreValue = localStorage.getItem("High Score");
    highScore.innerHTML = `High Score: ${localStorage.getItem("High Score")};`
} else {
    //reset high score to 0 if no recent high score available
    localStorage.setItem("High Score", highScoreValue);
    highScore.innerHTML = `High Score: ${localStorage.getItem("High Score")};`
}


export function update() {
if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = randomFood()
    currentScoreValue++;
    sessionStorage.setItem("Score", currentScoreValue);
    currentScore.innerHTML = `Score: ${sessionStorage.getItem("Score")}`;

    //update the high score if surpassed
    if(currentScoreValue > highScoreValue){
        highScoreValue = currentScoreValue;
        localStorage.setItem("High Score", highScoreValue);
    }
    highScore.innerHTML = `High Score: ${localStorage.getItem("High Score")};`;
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