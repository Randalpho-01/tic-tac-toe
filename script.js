(function() {
    const cells = document.querySelectorAll('.cell');
    const message = document.getElementById('message');
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
  
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]             
    ];
    
    const handleCellClick = (event) => {
      const index = parseInt(event.target.dataset.index);
    
      if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
      
    };
  
    const checkWin = () => {
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          message.textContent = `Player ${board[a]} congratulation winner!`;
          gameActive = false;
          return;
        }
      }
  
      if (!board.includes('')) {
        message.textContent = "It's a draw!";
        gameActive = false;
      }
    };
  
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));

    function displayCongratulationPopup() {
        alert("Congratulation! You Won! Play Again!");
        
    }
    displayCongratulationPopup();

    const congratulationBtn = document.getElementById('congratulationBtn');
    const congratulationPopup = document.getElementById('congratulationPopup');
    const closeBtn = document.querySelector('.close');

    congratulationBtn.addEventListener('click', function() {
       congratulationPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
      congratulationPopup.style.display = 'none';
    });

    
})();