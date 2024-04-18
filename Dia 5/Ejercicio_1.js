function esSeguro(tablero, fila, columna, N) {
    for (let i = 0; i < fila; i++) {
        if (tablero[i][columna] === 'R') {
            return false;
        }
        if (columna - (fila - i) >= 0 && tablero[i][columna - (fila - i)] === 'R') {
            return false;
        }
        if (columna + (fila - i) < N && tablero[i][columna + (fila - i)] === 'R') {
            return false;
        }
    }
    return true;
}

function colocarReinas(tablero, fila, N) {
    if (fila === N) {
        for (let fila of tablero) {
            console.log(fila.join(' '));
        }
        console.log("\n");
    }
    for (let columna = 0; columna < N; columna++) {
        if (esSeguro(tablero, fila, columna, N)) {
            tablero[fila][columna] = 'R';
            colocarReinas(tablero, fila + 1, N);
            tablero[fila][columna] = 'O';
        }
    }
}

const N = 8;  // Tamaño del tablero de ajedrez
const tablero = Array.from({ length: N }, () => Array(N).fill('O'));

const posicionReina = [8, 8];  // Posición de la primera reina

tablero[posicionReina[0]-1][posicionReina[1]-1] = 'R';

colocarReinas(tablero, 0, N);