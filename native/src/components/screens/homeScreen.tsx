import _ from 'lodash'
import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ChallengeCard } from '@components/ui/ChallengeCard'
import { Layout, Text } from '@ui-kitten/components'

import { useChallengesQuery } from '../../../graphqlSdk'

const COLORS = {
  orange: '#ffc342',
  lightbrown: '#f5efe3',
  navy: '#0c2945',
  cyan: '#37a2a4',
}

export const HomeScreen: React.FC = () => {
  const { data, loading, error } = useChallengesQuery()

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error || !data) {
    return <Text>Error!</Text>
  }

  const { challenge: challenges } = data

  const challengesWithColors = challenges.map(challenge => ({
    ...challenge,
    color: _.sample(COLORS),
  }))

  return (
    <Layout style={{ flex: 1 }} level="1">
      <Layout level="3">
        <SafeAreaView>
          <Text category="h3" style={{ marginLeft: 16, marginBottom: 16, marginTop: 32 }}>
            Your challenges
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 8 }}
          >
            {challengesWithColors.map(challenge => (
              <ChallengeCard
                challenge={challenge}
                key={challenge.id}
                width={Dimensions.get('window').width / 3}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </Layout>
      <ScrollView>
        <Layout level="1">
          <Text category="h6" style={{ marginLeft: 16, marginBottom: 16, marginTop: 24 }}>
            Find a new challenge
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 8 }}
          >
            {challengesWithColors.map(challenge => (
              <ChallengeCard
                challenge={challenge}
                key={challenge.id}
                width={Dimensions.get('window').width / 3}
              />
            ))}
          </ScrollView>

          <Text category="h6" style={{ marginLeft: 16, marginBottom: 16, marginTop: 24 }}>
            See your previous challenges
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 8 }}
          >
            {challengesWithColors.map(challenge => (
              <ChallengeCard
                challenge={challenge}
                key={challenge.id}
                width={Dimensions.get('window').width / 3}
              />
            ))}
          </ScrollView>
        </Layout>
      </ScrollView>
    </Layout>
  )
}
