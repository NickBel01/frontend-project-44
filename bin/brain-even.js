#!/usr/bin/env node
import readlineSync from 'readline-sync'
import helloUser from '../src/cli.js'

const brainEven = () =>{

    const userName = helloUser()
    let greatAtteps = 0

    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    
    while (greatAtteps < 3) {
        let randomNumber = Math.floor(Math.random() * 100) + 1
        console.log('Question: ' + randomNumber)
        const answer = readlineSync.question('Your answer: ')
        const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'
        if(answer === correctAnswer){
            console.log('Correct!')
            greatAtteps ++
        }
        else{
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log("Let's try again, " + userName + '!')
            return
        }
    }
    if (greatAtteps === 3) {
    console.log(`Congratulations, ${userName}!`)
}
}
brainEven()