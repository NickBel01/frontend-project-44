import { getRandomNumbers } from '../utils.js'

export const rule = 'What is the result of the expression?'
export const getQuestionAndAnswer = () => {
  let a = getRandomNumbers()
  let b = getRandomNumbers()
  const operators = ['+', '-', '*']
  const operator = operators[getRandomNumbers(0, operators.length - 1)]
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
