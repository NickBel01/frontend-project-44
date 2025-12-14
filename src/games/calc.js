export const rule = 'What is the result of the expression?'
export const getQuestionAndAnswer = () => {
  let correctAnswer = 0

  let randomNumberOne = Math.floor(Math.random() * 100) + 1
  let randomNumberTwo = Math.floor(Math.random() * 100) + 1

  const operators = ['+', '-', '*']
  const operator = operators[Math.floor(Math.random() * operators.length)]

  switch (operator) {
    case '+':
      correctAnswer = randomNumberOne + randomNumberTwo
      break
    case '-':
      if (randomNumberOne < randomNumberTwo) {
        [randomNumberOne, randomNumberTwo] = [randomNumberTwo, randomNumberOne]
      }
      correctAnswer = randomNumberOne - randomNumberTwo
      break
    case '*':
      correctAnswer = randomNumberOne * randomNumberTwo
      break
  }

  const question = `${randomNumberOne} ${operator} ${randomNumberTwo}`

  return [question, String(correctAnswer)]
}
