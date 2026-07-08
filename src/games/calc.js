import { getRandomNumber } from '../utils.js'

export const rule = 'What is the result of the expression?'
export const getQuestionAndAnswer = () => {
  let a = getRandomNumber()
  let b = getRandomNumber()
  const operators = ['+', '-', '*']
  const operator = operators[getRandomNumber(0, operators.length - 1)]
  let correctAnswer

  switch (operator) {
    case '+':
      correctAnswer = a + b
      break
    case '-':
      correctAnswer = a - b
      break
    case '*':
      correctAnswer = a * b
      break
  }

  return [`${a} ${operator} ${b}`, String(correctAnswer)]
}
