import { getRandomNumbers } from '../utils.js'

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const isPrime = (n) => {
  if (n < 2) return false
  else if (n === 2) return true
  else if (n % 2 === 0) return false
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
export const getQuestionAndAnswer = () => {
  const n = getRandomNumbers()
  const question = n
  const correctAnswer = isPrime(n) ? 'yes' : 'no'
  return [String(question), correctAnswer]
}
