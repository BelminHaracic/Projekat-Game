// Define the Snake object
function Snake() {
    this.length = 6;
    this.position = [100, 100];
    this.direction = 'right';
  }
  
  
  // Define the Game object
  function Game(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.snake = new Snake();
    this.food = [Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height)];
    var self = this;
    
    // Add event listeners for arrow keys to change snake direction
    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 37 && self.snake.direction !== 'right') {
        self.snake.direction = 'left';
      } else if (event.keyCode === 38 && self.snake.direction !== 'down') {
        self.snake.direction = 'up';
      } else if (event.keyCode === 39 && self.snake.direction !== 'left') {
        self.snake.direction = 'right';
      } else if (event.keyCode === 40 && self.snake.direction !== 'up') {
        self.snake.direction = 'down';
      }
    });
  }
  
// Define the Game's update function
Game.prototype.update = function() {
  // Update the snake's position based on its direction
  if (this.snake.direction === 'right') {
    this.snake.position[0]++;
  } else if (this.snake.direction === 'left') {
    this.snake.position[0]--;
  } else if (this.snake.direction === 'up') {
    this.snake.position[1]--;
  } else if (this.snake.direction === 'down') {
    this.snake.position[1]++;
  }

  // Check if the snake has collided with the game board
  if (this.snake.position[0] < 0 || this.snake.position[0] > this.canvas.width || this.snake.position[1] < 0 || this.snake.position[1] > this.canvas.height) {
    clearInterval(game);
    document.getElementById('gameover').textContent = 'Game Over!';

    // Restart the game after a delay of 3 seconds
    setTimeout(function() {
      location.reload();
    }, 3000);
  }

  // Check if the snake has collided with the food
  if (this.snake.position[0] === this.food[0] && this.snake.position[1] === this.food[1]) {
    // Increase the snake's length and generate a new food position
    this.snake.length += 3;
    this.food = [Math.floor(Math.random() * this.canvas.width), Math.floor(Math.random() * this.canvas.height)];
  }
};

  // Define the Game's draw function
  Game.prototype.draw = function() {
    // Clear the canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw the snake
    this.context.fillStyle = 'green';
    this.context.fillRect(this.snake.position[0], this.snake.position[1], this.snake.length, 3);
    
    // Draw the food
    this.context.fillStyle = 'red';
    this.context.fillRect(this.food[0], this.food[1], 6, 3);
  };
  
  // Create a new Game object and start the game loop
  var canvas = document.getElementById('game-canvas');
  var game = new Game(canvas);
  
  setInterval(function() {
    game.update();
    game.draw();
  }, 100);
  