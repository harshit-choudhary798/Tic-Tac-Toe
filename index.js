const PossibleSolutions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const clickedBtns = document.querySelectorAll('.child');
var winner = document.getElementById('Winner-reveal')

let currentPlayer = "X";

let PlayerXMoves = 0;
let PlayerYMoves = 0;

let PlayerXMovesArr = [];
let PlayerYMovesArr = [];

var clickedCount=0;
clickedBtns.forEach(function (btn) {
    btn.addEventListener('click', updateValue);
});

function updateValue(event) {
    clickedCount++;
    const dataValue = event.target.getAttribute('data-value');

    if (event.target.textContent === '') {
        event.target.textContent = currentPlayer;

        if (currentPlayer === "X") {
            PlayerXMoves++;
            PlayerXMovesArr.push(Number(dataValue));
            if (PlayerXMoves >= 3) {
                MatchFinals(PlayerXMovesArr, "X");
            }
            currentPlayer = "O";

        } else if (currentPlayer === "O") {
            PlayerYMoves++;
            PlayerYMovesArr.push(Number(dataValue));
            if (PlayerYMoves >= 3) {
                MatchFinals(PlayerYMovesArr, "Y");
            }
            currentPlayer = "X";
        }
    }
}


