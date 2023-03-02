<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>بازی پرتاب توپ</title>
  <style>
    #game-container {
      position: relative;
      width: 500px;
      height: 500px;
      border: 1px solid black;
    }

    #ball {
      position: absolute;
      top: 250px;
      left: 250px;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background-color: red;
    }

    #circle {
      position: absolute;
      top: 150px;
      left: 150px;
      width: 200px;
      height: 200px;
      border-radius: 100px;
      border: 5px solid blue;
    }

    #score {
      font-size: 24px;
      font-weight: bold;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div id="game-container">
    <div id="ball"></div>
    <div id="circle"></div>
  </div>
  <div id="score">امتیاز: 0</div>
  <script>
    var score = 0;
    var ball = document.getElementById('ball');
    var circle = document.getElementById('circle');
    var scoreDisplay = document.getElementById('score');

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function checkCollision() {
      var ballRect = ball.getBoundingClientRect();
      var circleRect = circle.getBoundingClientRect();
      return !(
        ballRect.bottom < circleRect.top ||
        ballRect.top > circleRect.bottom ||
        ballRect.right < circleRect.left ||
        ballRect.left > circleRect.right
      );
    }

    function updateScore() {
      score++;
      scoreDisplay.innerHTML = 'امتیاز: ' + score;
    }

    function resetBall() {
      ball.style.top = '250px';
      ball.style.left = '250px';
    }

    function moveBall() {
      var x = getRandomInt(-10, 10);
      var y = getRandomInt(-10, 10);
      ball.style.top = ball.offsetTop + y + 'px';
      ball.style.left = ball.offsetLeft + x + 'px';
      if (checkCollision()) {
        updateScore();
        resetBall();
      }
    }

    setInterval(moveBall, 50);
  </script>
</body>
</html>
