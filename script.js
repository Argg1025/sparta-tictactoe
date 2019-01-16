document.addEventListener("DOMContentLoaded", function () {
    const square = document.getElementsByTagName('td');
    const reset = document.getElementById('reset');
    const heading = document.getElementsByClassName('playerTurn');

    // ==== Making the X ====
    const X = document.createElement('p');
    X.setAttribute('class', 'X');
    X.setAttribute('id', 'XO');
    X.innerText = 'X';

    // ==== Making the O ====
    const O = document.createElement('p');
    O.setAttribute('class', 'O');
    O.setAttribute('id', 'XO');
    O.innerText = 'O';

    // ==== Function for X and O click events ====



    function clickSquare() {
        let move = 1;
        for (let i = 0; i < 9; i++) {
            square[i].addEventListener('mousedown', function () {
                if (move % 2 === 1) {
                    square[i].appendChild(X);
                    move++
                } else {
                    square[i].appendChild(O);
                    move++
                }
            })
        }

    }






    // ==== Function for the O click event ====
    // for (let i = 0; i < 9; i++) {
    //     square[i].addEventListener('mousedown', function (e) {
    //         square[i].appendChild(X);
    //     })
    // }



    // ==== Function for reset ====
    function resetBoard() {
        for (let i = 0; i < 9; i++) {
            square[i].removeChild(square[i].firstElementChild);
        }
    }

    // ==== CLick event for the reset button ==== 
    // ==== Doesn't work if square 0 is empty ==== 
    reset.addEventListener('mousedown', function (e) {
        resetBoard()
    })


    // ==== Win Events function ====
    // Must check if the winning conditions are met and return true if yes or false if not.
    function winCheck() {
        if ((square[0].textContent === square[1].textContent) && (square[1].textContent === square[2].textContent)) {
            winner = true;
            return winner;
        } else if ((square[3].textContent === square[4].textContent) && (square[4].textContent === square[5].textContent)) {
            winner = true;
            return winner;
        } else if ((square[6].textContent === square[7].textContent) && (square[7].textContent === square[8].textContent)) {
            winner = true;
            return winner;
        } else if ((square[0].textContent === square[3].textContent) && (square[3].textContent === square[6].textContent)) {
            winner = true;
            return winner;
        } else if ((square[1].textContent === square[4].textContent) && (square[4].textContent === square[7].textContent)) {
            winner = true;
            return winner;
        } else if ((square[2].textContent === square[5].textContent) && (square[5].textContent === square[8].textContent)) {
            winner = true;
            return winner;
        } else if ((square[0].textContent === square[4].textContent) && (square[4].textContent === square[8].textContent)) {
            winner = true;
            return winner;
        } else if ((square[2].textContent === square[4].textContent) && (square[4].textContent === square[6].textContent)) {
            winner = true;
            return winner;
        } else {
            winner = false;
            return winner;
        }

    }
    m = 3;


    // ==== First turn ====
    function firstTurn() {
        move = 1;
        for (let i = 0; i < 9; i++) {
            square[i].addEventListener('mousedown', function () {

                square[i].appendChild(X);
                move++

            })
        }
    }


    clickSquare()



    // ==== Play Game ====
    // function playGame() {
    //     let move = 1;
    //     let winner = false;

    //     // firstTurn()

    //     while (winner === false) {

    //         winCheck()
    //     }
    // }
    // playGame()







}); //END DOMCONTENTLOADED