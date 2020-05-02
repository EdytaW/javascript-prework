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


function getMoveName(argPlayerMove) {
    if (argPlayerMove == 1) {
        return 'kamień';
    } else if (argPlayerMove == 2) {
        return 'papier';
    } else if (argPlayerMove == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argPlayerMove + '.');
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

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

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

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Wygrywa komputer!');
    }

    if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Wygrywa komputer');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    }

    if (argComputerMove == argPlayerMove) {
        printMessage('Remis');
    }
}

printMessage('Result:' + displayResult(computerMove, playerMove));
