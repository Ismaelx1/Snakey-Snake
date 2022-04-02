const gridSize = 21;

export function randomGrid() {
    return {
        x: Math.floor(Math.random() * gridSize) + 1,
        y: Math.floor(Math.random() * gridSize) + 1
    }
}

export function outsideGrid(pos) {
    return (
        pos.x < 1 || pos.x > gridSize || pos.y < 1 || pos.y > gridSize
    )
}