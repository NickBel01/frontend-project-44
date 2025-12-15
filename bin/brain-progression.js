#!/usr/bin/env node
import index from '../src/index.js'
import { rule, getQuestionAndAnswer } from '../src/games/progression.js'

index(rule, getQuestionAndAnswer)
