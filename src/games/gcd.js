import { getRandomNumbers } from '../utils.js'

export const rule = 'Find the greatest common divisor of given numbers.'
export const getQuestionAndAnswer = () => {
  const a = getRandomNumbers()
  const b = getRandomNumbers()
  let x = a
  let y = b

  while (y !== 0) {
    [x, y] = [y, x % y]
  }

  return [`${a} ${b}`, String(x)]
}
