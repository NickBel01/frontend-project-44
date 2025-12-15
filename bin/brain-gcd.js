#!/usr/bin/env node
import index from '../src/index.js'
import { rule, getQuestionAndAnswer } from '../src/games/gcd.js'

index(rule, getQuestionAndAnswer)
