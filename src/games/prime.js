import { getRandomNumber } from '../utils.js'

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (n) => {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false
  }
  return true
}

export const getQuestionAndAnswer = () => {
  const n = getRandomNumber()
  const correctAnswer = isPrime(n) ? 'yes' : 'no'
  return [String(n), correctAnswer]
}
