function isSafe(board, row, col) {
    // Verifica si es seguro ubicar una reina en la posición (row, col)
    for (let i = 0; i < row; i++) {
        if (board[i][col] === 1) {
            return false;
        }
        if (col - (row - i) >= 0 && board[i][col - (row - i)] === 1) {
            return false;
        }
        if (col + (row - i) < board.length && board[i][col + (row - i)] === 1) {
            return false;
        }
    }
    return true;
}

function solveNQueens(n) {
    function backtrack(row) {
        if (row === n) {
            // Se encontró una solución válida
            solutions.push([...board]);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row][col] = 1;
                backtrack(row + 1);
                board[row][col] = 0;
            }
        }
    }

    const board = Array.from({ length: n }, () => Array(n).fill(0));
    const solutions = [];
    backtrack(0);
    return solutions;
}

function main() {
    const n = parseInt(prompt("Ingrese el orden del tablero (1 <= n <= 15):"));
    const solutions = solveNQueens(n);
    console.log(`Tableros distintos posibles: ${solutions.length}`);
}

main();
