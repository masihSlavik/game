import random

# generate a random number between 1 and 100
number = random.randint(1, 100)

# welcome message
print("Welcome to Guess the Number! I'm thinking of a number between 1 and 100. Can you guess what it is?")

# loop until the user guesses correctly
while True:
    # ask the user to guess the number
    guess = int(input("Enter your guess: "))
    
    # check if the guess is correct
    if guess == number:
        print("Congratulations, you guessed the number!")
        break
    elif guess < number:
        print("Too low! Guess again.")
    else:
        print("Too high! Guess again.")
