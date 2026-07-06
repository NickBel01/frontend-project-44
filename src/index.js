import readlineSync from 'readline-sync'

const ROUNDS_COUNT = 3

const runGame = (rule, getQuestionAndAnswer, userName) => {
  console.log(rule)

  for (let i = 0; i < ROUNDS_COUNT; i++) {
    const [question, correctAnswer] = getQuestionAndAnswer()

    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

export default runGame
