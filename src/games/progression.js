import { getRandomNumber } from '../utils.js'

export const rule = 'What number is missing in the progression?'

const LENGTH = 10
const MIN_STEP = 1
const MAX_STEP = 10

const getProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

const getRandomIndex = length => Math.floor(Math.random() * length)

export const getQuestionAndAnswer = () => {
  const start = getRandomNumber()
  const step = getRandomNumber(MIN_STEP, MAX_STEP)
  const progression = getProgression(start, step, LENGTH)
  const indexHide = getRandomIndex(LENGTH)

  const questionParts = progression.map((num, i) => (i === indexHide ? '..' : num))
  const question = questionParts.join(' ')
  const correctAnswer = progression[indexHide]

  return [question, String(correctAnswer)]
}
