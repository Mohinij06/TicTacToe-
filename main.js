let currentPlayer = 'X';
let gameBoard = ['','','','','','','','',''];
let gameActive = true;

function cellClicked(cellIndex){
    if(!gameActive || gameBoard[cellIndex] !=='') return;
    gameBoard[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerHTML= currentPlayer;
    if(checkWinner()){
        document.getElementById('message').innerHTML = 
        `Player ${currentPlayer} Wins!`;
        console.count("count");
        gameActive = false;
        return;
    }
    if(!gameBoard.includes('')){
        document.getElementById('message').innerText = 
        `It's a Tie!`;
        gameActive = false;
        return;
    }


    currentPlayer = currentPlayer ==='X' ? 'O':'X';
    document.getElementById('message').innerText = 
    `Player ${currentPlayer}'s turn`;
     
}

function checkWinner(){
    const winningConditions = [
        [0,1,2],[3,4,5],[6,7,8], 
        [0,3,6],[1,4,7],[2,5,8], 
        [0,4,8],[2,4,6], 
    ];
    return winningConditions.some(conditions => {
        return conditions.every(index => gameBoard[index] === currentPlayer);

    });
}
function restartBtn(){
    currentPlayer = 'X';
    gameBoard = ['','','','','','','','',''];
    gameActive = true;   

    document.getElementById('message').innerText = `Let's Play`;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = ``);
}



