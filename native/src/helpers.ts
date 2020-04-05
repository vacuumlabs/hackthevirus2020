import _ from 'lodash'

export const categoryMapping = {
  FUN: 'Fun',
  HELP: 'Help',
  COOK: 'Cook',
  HEALTH: 'Health',
  FITNESS: 'Fitness',
}

const COLORS = {
  orange: '#ffc342',
  navy: '#0c2945',
  cyan: '#37a2a4',
}

const challengeColor: Record<string, string> = {}

export const getChallengeColor = (challengeId: string): string => {
  if (challengeColor[challengeId]) return challengeColor[challengeId]
  const randomColor = _.sample(COLORS)
  challengeColor[challengeId] = randomColor
  return randomColor
}
