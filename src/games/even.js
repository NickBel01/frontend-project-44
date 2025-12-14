export const rule = 'Answer "yes" if the number is even, otherwise answer "no".'
export const getQuestionAndAnswer = () => {
  let randomNumber = Math.floor(Math.random() * 100) + 1
  const question = randomNumber
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'
  return [question, correctAnswer]
}
