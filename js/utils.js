const timerDiv = document.querySelector('#timer');
const displayResultDiv = document.querySelector('#displayResult');
function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId);
    displayResultDiv.style.display = 'flex';
    if (player.health === enemy.health) {
        displayResultDiv.innerHTML = 'Tie';
    } else if (player.health > enemy.health) {
        displayResultDiv.innerHTML = 'Player Wins!';
    } else {
        displayResultDiv.innerHTML = 'Enemy Wins!';
    }
}

let timer = 60;
let timerId
function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000);
        timer--;
        timerDiv.innerHTML = timer;
    }

    if (timer === 0) {
        determineWinner({ player, enemy, timerId });
    }
}

function retangularCollision({ rectangle1, rectangle2 }) {
    return (rectangle1.attackBox.position.x + rectangle1.attackBox.with >= rectangle2.position.x 
        && rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.size.width
        && rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y
        && rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.size.height);
}
