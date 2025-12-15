export const rule = 'Find the greatest common divisor of given numbers.'
export const getQuestionAndAnswer = () => {
  let a = Math.floor(Math.random() * 100) + 1
  let b = Math.floor(Math.random() * 100) + 1

  const question = `${a} ${b}`

  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  const correctAnswer = String(a)
  return [question, correctAnswer]
}
