var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-300;

var dx = Math.random() * 3;
var dy = Math.random() * -3;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 7;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 68;
var brickOffsetLeft = 25;

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

var score = 0;
var lives = 3;

var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, 'aliceBlue');
gradient.addColorStop(.5, 'lightSteelBlue');
gradient.addColorStop(1, 'aliceBlue');


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}
function drawGradient() {
  ctx.beginPath();
  ctx.rect(0, 0, canvas.height, canvas.height);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.rect(0,0, canvas.height, canvas.width);
}
function drawName() {
  ctx.font = "50px Arial Black, Gadget, sans-serif";
  ctx.fillStyle = "crimson";
  ctx.fillText("SMASHAWAY", canvas.width/4 - 15, 50);
  ctx.strokeStyle = "orange";
  ctx.lineWidth = 3;
  ctx.strokeText ("SMASHAWAY", canvas.width/4 - 15, 50);
}
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "midnightBlue";
  ctx.fillText("Score: " + score, 8, 54);
}
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillstyle = "#0095DD";
  ctx.fillText("Lives: " + lives, canvas.width-65, 54);
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "crimson";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.closePath();
}
function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "midnightBlue";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGradient();
    drawBricks();
    drawBall();
    drawPaddle();
    drawName();
    drawScore();
    drawLives();
    collisionDetection();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            if (y = y - paddleHeight) {
                dy = -dy;
            }
        }
        else {
            lives--;
            if(!lives) {
              alert("GAME OVER");
              document.location.reload();
              clearInterval(interval);
          }else {
            x = canvas.width/2;
            y = canvas.height-30;
            dx = Math.random() * 3;
            dy = Math.random() * -3;
            paddleX = (canvas.width-paddleWidth)/2;
          }
        }
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
  
    requestAnimationFrame(draw);
}

draw();
