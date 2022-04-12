const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
})


const evalGuess = (guess) => {
    guess = parseInt(guess)
    if (guess == number) {
        return [false, "You guessed it!"]
    } else if (guess < number) {
        return [true, "higher"]
    } else if (guess > number) {
        return [true, "lower"]
    }
    return [true, "not a number"]
}


const playGame = () => {
    number = Math.floor(Math.random() * (1000 - 1) + 1)
    guessed = []
    guesses = 0
    playing = true
    console.log("What's your guess?")
    rl.prompt()
    rl.on('line', (line) => {
        if (line === 'n' || line === 'q') {
            console.log('quitting...')
            rl.close()
        } else if (playing) {
            res = evalGuess(line)
            if (res[0] && res[1] !== "not a number") {
                guesses += 1
                guessed.push(line)
            }
            console.log(res[1])
            playing = res[0]
            if (guesses >= 10 && playing) {
                console.log("Out of guesses")
                playing = false
            }
            if (playing) {
                console.log(`Guesses used: ${guesses}\nNums Guessed: ${guessed}\nWhat's your guess?`)
            } else {
                console.log("Play again?(y/n)")
            }
        } else {
            number = Math.floor(Math.random() * (1000 - 1) + 1)
            guessed = []
            guesses = 0
            playing = true
            console.log("What's your guess?")
        }
    })
}

console.log("This is a classic number guessor game\nGuess a number between 1 and 1000 and I'll tell you if the answer is 'higher' or 'lower'\n'q' will quit")

playGame()