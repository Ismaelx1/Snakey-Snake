import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeH, snakeIntersec } from './snake.js'

import {update as updateFood, draw as drawFood} from './food.js'

import {outsideGrid} from './grid.js'

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('board')


function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost, Try Again?')) {window.location = '/'} 
        
        return
    }


    window.requestAnimationFrame(main)

    const secLastRender = (currentTime - lastRenderTime) / 1000;

    if (secLastRender < 1 / SNAKE_SPEED) return
   
    lastRenderTime = currentTime

update()
draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeH()) || snakeIntersec()
}