import { getInputDirection } from './input.js'

export const SNAKE_SPEED = 10;

let newsegment = 0;

const snakeBody = [
 
    {x: 11, y: 11}
    
]

export function update() {
addSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x;
   snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
            const snakeElement = document.createElement('div')
            snakeElement.style.gridColumnStart = segment.x
            snakeElement.style.gridRowStart = segment.y
            snakeElement.classList.add('snake')
            gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newsegment += amount
}

export function onSnake(position, {ignorehead = false} = {}) {

    return snakeBody.some((segment, index) => {
        if (ignorehead && index === 0) return false;
        return equalPositions(segment, position)

    })
}

function equalPositions(pos1, pos2) {
    return (pos1.x === pos2.x && pos1.y === pos2.y)
}

function addSegments() {
   for (let i = 0; i < newsegment; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length -1]})

   }

   newsegment = 0;
}

export function getSnakeH() {
    return snakeBody[0]
}

export function snakeIntersec() {
    return onSnake(snakeBody[0], {ignorehead: true})
}