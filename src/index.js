import readlineSync from 'readline-sync'
import helloUser from '../src/cli.js'

const attemptCount = 3
const index = (rule, getQuestionAndAnswer) => {
  const userName = helloUser()
  let correctAttempts = 0
  console.log(rule)
  while (correctAttempts < attemptCount) {
    const [question, correctAnswer] = getQuestionAndAnswer()

    console.log('Question: ' + question)
    const answer = readlineSync.question('Your answer: ')

    if (answer === correctAnswer) {
      console.log('Correct!')
      correctAttempts++
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log('Let\'s try again, ' + userName + '!')
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

export default index
