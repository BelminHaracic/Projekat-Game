const cells = document.querySelectorAll('.cell');
const resetBtn = document.querySelector('#reset');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

cells.forEach(cell => {
	cell.addEventListener('click', () => {
	  if (cell.textContent === '') {
		cell.textContent = currentPlayer;
		cell.classList.add(currentPlayer);
		gameBoard[cell.id - 1] = currentPlayer;
		if (checkWin()) {
			document.getElementById('winner').textContent = `${currentPlayer} wins!`;
		  reset();
		} else if (checkDraw()) {
			document.getElementById('winner').textContent = 'Draw!';
		  reset();
		} else {
		  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		}
	  }
	});
});  

function checkWin() {
	return (
		(gameBoard[0] === currentPlayer && gameBoard[1] === currentPlayer && gameBoard[2] === currentPlayer) ||
		(gameBoard[3] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[5] === currentPlayer) ||
		(gameBoard[6] === currentPlayer && gameBoard[7] === currentPlayer && gameBoard[8] === currentPlayer) ||
		(gameBoard[0] === currentPlayer && gameBoard[3] === currentPlayer && gameBoard[6] === currentPlayer) ||
		(gameBoard[1] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[7] === currentPlayer) ||
		(gameBoard[2] === currentPlayer && gameBoard[5] === currentPlayer && gameBoard[8] === currentPlayer) ||
		(gameBoard[0] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[8] === currentPlayer) ||
		(gameBoard[2] === currentPlayer && gameBoard[4] === currentPlayer && gameBoard[6] === currentPlayer)
	);
}

function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}
    
function reset() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
	//document.getElementById('winner').textContent = '';
}
    
resetBtn.addEventListener('click', reset);



cells.forEach(function(cell) {
  cell.addEventListener('click', function() {
	
	var audio = new Audio('zvuk/iksoks.mp3');
	audio.play();
	
	markCell(cell);
	checkForWinner();
  });
}); 
