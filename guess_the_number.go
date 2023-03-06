package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    rand.Seed(time.Now().UnixNano())
    number := rand.Intn(100) + 1

    fmt.Println("Welcome to Guess the Number! I'm thinking of a number between 1 and 100. Can you guess what it is?")

    for {
        var guess int
        fmt.Print("Enter your guess: ")
        fmt.Scan(&guess)

        if guess == number {
            fmt.Println("Congratulations, you guessed the number!")
            break
        } else if guess < number {
            fmt.Println("Too low! Guess again.")
        } else {
            fmt.Println("Too high! Guess again.")
        }
    }
}
