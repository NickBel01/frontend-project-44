#!/usr/bin/env node
import readlineSync from 'readline-sync'
import helloUser from '../src/cli.js'

const index = (rule, getQuestionAndAnswer) => {
  const userName = helloUser()
  let greatAtteps = 0
  console.log(rule)
  while (greatAtteps < 3) {
    const [question, correctAnswer] = getQuestionAndAnswer()

    console.log('Question: ' + question)
    const answer = readlineSync.question('Your answer: ')

    if (answer === correctAnswer) {
      console.log('Correct!')
      greatAtteps++
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
