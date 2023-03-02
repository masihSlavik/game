<!DOCTYPE html>
<html>
<head>
	<title>Guess the Number</title>
	<script>
		// تولید یک عدد تصادفی بین ۱ تا ۱۰۰
		let number = Math.floor(Math.random() * 100) + 1;
		let guesses = 0;

		function checkGuess() {
			// خواندن عدد ورودی از کاربر
			let userGuess = document.getElementById("guess").value;

			// تبدیل عدد ورودی به عدد صحیح
			userGuess = parseInt(userGuess);

			// بررسی اینکه عدد ورودی بزرگتر، کوچکتر یا برابر با عدد رندوم است
			if (userGuess < number) {
				document.getElementById("result").innerHTML = "عددی بزرگتر را امتحان کنید.";
			} else if (userGuess > number) {
				document.getElementById("result").innerHTML = "عددی کوچکتر را امتحان کنید.";
			} else {
				document.getElementById("result").innerHTML = "تبریک! شما عدد را حدس زدید.";
				document.getElementById("guessButton").disabled = true;
			}

			// افزایش تعداد حدس‌ها
			guesses++;
			document.getElementById("guessCount").innerHTML = "تعداد حدس‌ها: " + guesses;
		}
	</script>
</head>
<body>
	<h1>Guess the Number</h1>
	<p>یک عدد بین ۱ تا ۱۰۰ را حدس بزنید.</p>
	<label for="guess">حدس شما:</label>
	<input type="text" id="guess" name="guess">
	<button onclick="checkGuess()" id="guessButton">تایید</button>
	<p id="result"></p>
	<p id="guessCount"></p>
</body>
</html>
