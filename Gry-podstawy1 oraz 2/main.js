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

let ballSpeedX = 1;
let ballSpeedY = 1;

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
    ctx.fillStyle = "yellow";
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
    }
    if (ballX <= 0 || ballX + ballSize >= cw) {
        ballSpeedX = -ballSpeedX;
    }

}

function game() {
    table();
    ball();
    player();
    ai();
}
setInterval(game, 100 / 60)
