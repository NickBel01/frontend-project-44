export const rule = 'What number is missing in the progression?'
export const getQuestionAndAnswer = () => {
  let progression = []

  const length = 10
  let start = Math.floor(Math.random() * 50) + 1
  let step = Math.floor(Math.random() * 10) + 1
  const indexHide = Math.floor(Math.random() * length)

  for (let i = 0; i < 10; i++) {
    progression.push(start + i * step)
  }

  let questionParts = []
  for (let i = 0; i < progression.length; i++) {
    if (i === indexHide) {
      questionParts.push('..')
    }
    else {
      questionParts.push(progression[i])
    }
  }
  const question = questionParts.join(' ')

  const correctAnswer = progression[indexHide]
  return [question, String(correctAnswer)]
}
