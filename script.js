const gameContainer = document.getElementById('gameContainer');
const gridSize = 40; // The number of pixels in each row and column
const snake = [{ row: 20, col: 1 }]; // Initial position of the snake
let food = { row: Math.floor(Math.random() * gridSize), col: Math.floor(Math.random() * gridSize) }; // Initial position of the food
let direction = 'right'; // Initial direction of the snake
let score = 0;

function update() {
  // Update the snake's position based on the current direction
  const head = snake[0];

  // Add code to move the snake according to the direction

  // Check if the snake has eaten the food
  if (head.row === food.row && head.col === food.col) {
    // Generate new food
    food = { row: Math.floor(Math.random() * gridSize), col: Math.floor(Math.random() * gridSize) };
    score++;
    document.getElementById('pointsEarned').innerText = score;
  } else {
    // Remove the tail of the snake
    snake.pop();
  }

  // Update the game display
  draw();
}

function draw() {
  // Clear the game container
  gameContainer.innerHTML = '';

  // Draw the snake
  snake.forEach(segment => {
    const snakePixel = document.createElement('div');
    snakePixel.classList.add('snakeBodyPixel');
    snakePixel.style.gridRowStart = segment.row;
    snakePixel.style.gridColumnStart = segment.col;
    gameContainer.appendChild(snakePixel);
  });

  // Draw the food
  const foodPixel = document.createElement('div');
  foodPixel.classList.add('food');
  foodPixel.style.gridRowStart = food.row;
  foodPixel.style.gridColumnStart = food.col;
  gameContainer.appendChild(foodPixel);
}

setInterval(() => {
  update();
}, 100); // Update the game every 100ms
