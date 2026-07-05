import { getRandomNumbers } from '../utils.js'

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".'
export const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumbers()
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'
  return [String(randomNumber), correctAnswer]
}
