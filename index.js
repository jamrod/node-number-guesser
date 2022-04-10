const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
})


const evalGuess = (guess) => {
    if (guess === 'q') {
        return [false, "Quitting..."]
    }
    guessed.push(guess)
    guess = parseInt(guess)
    if (guess == number) {
        return [false, "You guessed it!"]
    } else if (guess < number) {
        return [true, "higher"]
    } else if (guess > number) {
        return [true, "lower"]
    }
    
}


const playGame = () => {
    number = Math.floor(Math.random() * (1000 - 1) + 1)
    guessed = []
    guesses = 0
    playing = true
    console.log("What's your guess?")
    rl.prompt()
    rl.on('line', (line) => {
        res = evalGuess(line)
        guesses += 1
        console.log(res[1])
        playing = res[0]
        if (guesses >= 10 && playing) {
            console.log("Out of guesses")
            playing = false
        }
        if (playing) {
            console.log(`Guesses used: ${guesses}\nNums Guessed: ${guessed}\nWhat's your guess?`)
        } else {
            rl.close()
        }
    })
}

console.log("This is a classic number guessor game\nGuess a number between 1 and 1000 and I'll tell you if the answer is 'higher' or 'lower'\n'q' will quit")

playGame()