clearMessages();

function playGame(playerInput) {
    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }


    function printMessage(msg) {
        let div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }

    function clearMessages() {
        document.getElementById('messages').innerHTML = '';
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    /*if (randomNumber == 1) {
        computerMove = 'kamień';
    } else if (randomNumber == 2) {
        computerMove = 'papier';
    } else {
        computerMove = 'nożyce';
    }*/

    printMessage('Mój ruch to: ' + computerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);


    /*if (playerInput == '1') {
        playerMove = 'kamień';
    } else if (playerInput == '2') {
        playerMove = 'papier';
    } else if (playerInput == '3') {
        playerMove = 'nożyce';
    } else {
        printMessage('nieznany ruch');
    }*/


    function displayResult(argComputerMove, argPlayerMove) {

        if (computerMove == 'kamień' && playerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (computerMove == 'papier' && playerMove == 'kamień') {
            printMessage('Wygrywa komputer!');
        } else if (computerMove == 'papier' && playerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
        } else if (computerMove == 'kamień' && playerMove == 'nożyce') {
            printMessage('Wygrywa komputer');
        } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if (computerMove == playerMove) {
            printMessage('Remis');
        }
    }

    printMessage('Result:' + displayResult(computerMove, playerMove));
}

document.getElementById('play-rock').addEventListener('click', function () {
    printMessage('Guzik został kliknięty');
});

document.getElementById('play-paper').addEventListener('click', function () {
    printMessage('Guzik został kliknięty');
});

document.getElementById('play-scissors').addEventListener('click', function () {
    printMessage('Guzik został kliknięty');
});
