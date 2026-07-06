#!/usr/bin/env node
import greet from '../src/cli.js'
import runGame from '../src/index.js'
import { rule, getQuestionAndAnswer } from '../src/games/even.js'

const userName = greet()
runGame(rule, getQuestionAndAnswer, userName)
