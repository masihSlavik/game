import random

# list of words to choose from
words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew']

# function to choose a random word from the list
def choose_word(words):
    return random.choice(words)

# function to initialize the game
def initialize(word):
    blanks = ['_'] * len(word)
    print(' '.join(blanks))
    return blanks

# function to play the game
def play_game(word):
    blanks = initialize(word)
    guesses = []
    incorrect_guesses = 0
    max_incorrect_guesses = 6
    
    while True:
        guess = input("Enter a letter: ")
        if guess in guesses:
            print("You've already guessed that letter. Try again.")
        elif guess in word:
            print("Correct!")
            for i in range(len(word)):
                if word[i] == guess:
                    blanks[i] = guess
            print(' '.join(blanks))
        else:
            print("Incorrect!")
            incorrect_guesses += 1
            print(f"You have {max_incorrect_guesses - incorrect_guesses} incorrect guesses left.")
            if incorrect_guesses == max_incorrect_guesses:
                print(f"You've run out of guesses. The word was {word}. Game over!")
                break
        guesses.append(guess)
        if '_' not in blanks:
            print("Congratulations, you've guessed the word!")
            break

# main function to start the game
def main():
    word = choose_word(words)
    print(f"The word has {len(word)} letters.")
    play_game(word)

if __name__ == '__main__':
    main()
