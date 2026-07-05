import { getRandomNumbers } from '../utils.js'

export const rule = 'What number is missing in the progression?'
export const getQuestionAndAnswer = () => {
  const length = 10

  const getProgression = (length) => {
    let progression = []

    let start = getRandomNumbers()
    let step = getRandomNumbers(1, 10)
    for (let i = 0; i < length; i++) {
      progression.push(start + i * step)
    }
    return progression
  }

  const getRandomIndex = (length) => {
    return Math.floor(Math.random() * length)
  }

  let progression = getProgression(length)
  const indexHide = getRandomIndex(length)
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
