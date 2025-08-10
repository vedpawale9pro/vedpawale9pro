const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const roadWidth = 400;
const carWidth = 40;
const carHeight = 80;

let player = {
  x: roadWidth / 2 - carWidth / 2,
  y: canvas.height - carHeight - 10,
  width: carWidth,
  height: carHeight,
  speed: 5
};

let keys = {};
let obstacles = [];
let score = 0;
let gameOver = false;

function drawCar(car, color = "red") {
  ctx.fillStyle = color;
  ctx.fillRect(car.x, car.y, car.width, car.height);
}

function drawRoad() {
  ctx.fillStyle = "#555";
  ctx.fillRect(0, 0, roadWidth, canvas.height);

  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.setLineDash([20, 20]);
  ctx.beginPath();
  ctx.moveTo(roadWidth / 2, 0);
  ctx.lineTo(roadWidth / 2, canvas.height);
  ctx.stroke();
}

function spawnObstacle() {
  const lane = Math.floor(Math.random() * 3);
  const laneWidth = roadWidth / 3;
  const x = lane * laneWidth + (laneWidth - carWidth) / 2;

  obstacles.push({
    x: x,
    y: -carHeight,
    width: carWidth,
    height: carHeight,
    speed: 3 + Math.random() * 2
  });
}

function update() {
  if (gameOver) return;

  // Move player car
  if (keys["ArrowLeft"] && player.x > 0) {
    player.x -= player.speed;
  }
  if (keys["ArrowRight"] && player.x < canvas.width - player.width) {
    player.x += player.speed;
  }

  // Move obstacles
  for (let obs of obstacles) {
    obs.y += obs.speed;

    // Collision detection
    if (
      player.x < obs.x + obs.width &&
      player.x + player.width > obs.x &&
      player.y < obs.y + obs.height &&
      player.y + player.height > obs.y
    ) {
      gameOver = true;
    }
  }

  // Remove off-screen obstacles
  obstacles = obstacles.filter(obs => obs.y < canvas.height);

  score++;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawRoad();
  drawCar(player);

  for (let obs of obstacles) {
    drawCar(obs, "blue");
  }

  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${score}`, 10, 30);

  if (gameOver) {
    ctx.fillStyle = "red";
    ctx.font = "40px Arial";
    ctx.fillText("GAME OVER", 80, canvas.height / 2);
  }
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

setInterval(spawnObstacle, 1500);

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

gameLoop();
