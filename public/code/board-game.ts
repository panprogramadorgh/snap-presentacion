// Function to draw the board and the character
function drawBoard() {
    // Clears the console
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);

    // Draws the board
    for (let i = 0; i < boardHeight; i++) {
        let row = '';
        for (let j = 0; j < boardWidth; j++) {
            if (i === y && j === x) {
                row += 'X'; // Draws the character
            } else {
                row += '.';
            }
        }
        console.log(row);
    }
}