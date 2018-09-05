const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;
const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;
let ballY = ch / 2 - ballSize / 2;

const paddleHeight = 100;
const paddleWidth = 20;

const playerX = 70;
const aiX = 910;

let playerY = 200;
let aiY = 200;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 0.45;
let ballSpeedY = 0.2;

function table() {
    ctx.fillStyle = "#000";
    //    ctx.fillRect(0, 0, 1000, 500);
    ctx.fillRect(0, 0, cw, ch)
    for (let linePosition = 20; linePosition < ch; linePosition += 30) {
        ctx.fillStyle = "gray"
        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight)
    }
}

function player() {
    ctx.fillStyle = "#7fff00";
    ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);
}

function ai() {
    ctx.fillStyle = "gold";
    ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight);
}

//ctx.fillStyle = "#ffffff";
//ctx.fillRect(cw / 2 - ballSize / 2, ch / 2 - ballSize / 2, ballSize, ballSize);

function ball() {
    ctx.fillStyle = "#ff0"
    ctx.fillRect(ballX, ballY, ballSize, ballSize);

    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY <= 0 || ballY + ballSize >= ch) {
        ballSpeedY = -ballSpeedY;
        speedUp();
    }
    if (ballX <= 0 || ballX + ballSize >= cw) {
        ballSpeedX = -ballSpeedX;
        speedUp();
    }

}
topCanvas = canvas.offsetTop;

function playerPosition(e) {
    //    console.log(e);
    playerY = e.clientY - topCanvas - paddleHeight / 2;

    if (playerY >= ch - paddleHeight) {
        playerY = ch - paddleHeight
    }
    if (playerY <= 0) {
        playerY = 0
    }
    aiY = playerY;

}

function speedUp() {
    console.log(ballSpeedX + ", " + ballSpeedY);
    if (ballSpeedX > 0 && ballSpeedX < 8) {
        ballSpeedX += 0.2;
    } else if (ballSpeedX < 0 && ballSpeedX > -8) {
        ballSpeedX -= 0.2;
    }
    if (ballSpeedY > 0 && ballSpeedY < 8) {
        ballSpeedY += 0.2;
    } else if (ballSpeedY < 0 && ballSpeedY > -8) {
        ballSpeedY -= 0.2;
    }
}

function aiPosition() {
    var middlePadel = aiY + paddleHeight / 2;
    var middleBall = ballY + ballSize / 2;
    if (ballX > 500) {
        if (middlePadel - middleBall > 200) {
            aiY -= 15;
        } else if (middlePadel - middleBall > 50) {
            aiY -= 5;
        }
        if (middlePadel - middleBall < -200) {
            aiY += 15
        } else if (middlePadel - middleBall < -50) {
            aiY += 5
        }

    } else if (ballX <= 500 && ballX > 150) {
        if (middlePanel - middleBall > 100) {
            aiY -= 3
        } else if (middlePanel - middleBall < -100) {
            aiY += 3
        }
    }
}
canvas.addEventListener('mousemove', playerPosition);



function game() {
    table();
    ball();
    player();
    ai();
    aiPosition();
}
setInterval(game, 100 / 60)
