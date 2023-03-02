<!DOCTYPE html>
<html>
<head>
	<title>تیراندازی فضایی</title>
	<style>
		body {
			margin: 0;
			padding: 0;
			background-color: #000;
		}
		#canvas {
			display: block;
			margin: auto;
			background-color: #111;
			border: 1px solid #fff;
		}
	</style>
</head>
<body>
	<canvas id="canvas" width="500" height="500"></canvas>
	<script>
		// تعریف متغیرها
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		var width = canvas.width;
		var height = canvas.height;
		var player = {
			x: width/2,
			y: height - 50,
			width: 50,
			height: 50,
			speed: 5
		};
		var bullets = [];
		var enemies = [];
		var score = 0;

		// تابعی برای ساخت دشمن‌ها
		function spawnEnemy() {
			var enemy = {
				x: Math.random() * width,
				y: 0,
				width: 50,
				height: 50,
				speed: 3
			};
			enemies.push(enemy);
		}

		// تابعی برای حرکت دشمن‌ها
		function moveEnemies() {
			for (var i = 0; i < enemies.length; i++) {
				enemies[i].y += enemies[i].speed;
				if (enemies[i].y > height) {
					enemies.splice(i, 1);
				}
			}
		}

		// تابعی برای ساخت گلوله‌ها
		function shoot() {
			var bullet = {
				x: player.x + player.width/2,
				y: player.y,
				width: 5,
				height: 10,
				speed: 10
			};
			bullets.push(bullet);
		}

		// تابعی برای حرکت گلوله‌ها
		function moveBullets() {
			for (var i = 0; i < bullets.length; i++) {
				bullets[i].y -= bullets[i].speed;
				if (bullets[i].y < 0) {
					bullets.splice(i, 1);
				}
			}
		}

		// تابعی برای اصابت گلوله به دشمن
		function checkCollisions() {
			for (var i = 0; i < enemies.length; i++) {
				for (var j = 0; j < bullets.length; j++) {
					if (bullets[j].x < enemies[i].x + enemies[i].width &&
						bullets[j].x + bullets[j].width > enemies[i]
                        .x &&
						bullets[j].y < enemies[i].y + enemies[i].height &&
						bullets[j].y + bullets[j].height > enemies[i].y) {
						enemies.splice(i, 1);
						bullets.splice(j, 1);
						score++;
					}
				}
			}
		}

		// تابعی برای رسم دشمن‌ها، گلوله‌ها، و بازیکن
		function draw() {
			ctx.clearRect(0, 0, width, height);
			ctx.fillStyle = "#fff";
			ctx.font = "24px Arial";
			ctx.fillText("امتیاز: " + score, 10, 30);
			for (var i = 0; i < enemies.length; i++) {
				ctx.fillRect(enemies[i].x, enemies[i].y, enemies[i].width, enemies[i].height);
			}
			for (var i = 0; i < bullets.length; i++) {
				ctx.fillRect(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height);
			}
			ctx.fillRect(player.x, player.y, player.width, player.height);
		}

		// تابعی برای بازی
		function game() {
			spawnEnemy();
			moveEnemies();
			moveBullets();
			checkCollisions();
			draw();
			if (score < 10) {
				window.requestAnimationFrame(game);
			} else {
				alert("شما برنده شدید!");
			}
		}

		// تابعی برای حرکت بازیکن
		function movePlayer(event) {
			if (event.keyCode === 37) { // چپ
				player.x -= player.speed;
			} else if (event.keyCode === 39) { // راست
				player.x += player.speed;
			} else if (event.keyCode === 32) { // فاصله (شلیک)
				shoot();
			}
			if (player.x < 0) {
				player.x = 0;
			}
			if (player.x + player.width > width) {
				player.x = width - player.width;
			}
		}

		// شروع بازی
		window.requestAnimationFrame(game);

		// اضافه کردن رویداد برای حرکت بازیکن
		document.addEventListener("keydown", movePlayer);
	</script>
</body>
</html>

