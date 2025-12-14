#!/usr/bin/env node
import index from '../src/index.js'
import { rule, getQuestionAndAnswer } from '../src/games/calc.js'

index(rule, getQuestionAndAnswer)
