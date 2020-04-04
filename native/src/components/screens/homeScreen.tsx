import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ChallengeCard } from '@components/ui/ChallengeCard'
import { ChallengeCategoryCard } from '@components/ui/ChallengeCategoryCard'
import { Layout, Text } from '@ui-kitten/components'

import {
  useAcceptedChallengesQuery,
  useChallengeCategoriesQuery,
  useCompletedChallengesQuery,
} from '../../../graphqlSdk'

const userId = '8003885c-e560-4263-a4e1-171293278a50'

export const HomeScreen: React.FC = () => {
  const acceptedChallengesQuery = useAcceptedChallengesQuery({ variables: { user_id: userId } })
  const completedChallengesQuery = useCompletedChallengesQuery({ variables: { user_id: userId } })
  const categoriesQuery = useChallengeCategoriesQuery()

  if (
    acceptedChallengesQuery.loading ||
    completedChallengesQuery.loading ||
    categoriesQuery.loading
  ) {
    return <Text>Loading...</Text>
  }

  if (
    acceptedChallengesQuery.error ||
    completedChallengesQuery.error ||
    categoriesQuery.error ||
    !acceptedChallengesQuery.data ||
    !completedChallengesQuery.data ||
    !categoriesQuery.data
  ) {
    return <Text>Error!</Text>
  }

  const acceptedChallenges = acceptedChallengesQuery.data.challenge_assignment
  const completedChalleges = completedChallengesQuery.data.challenge_assignment

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
            {acceptedChallenges.map(challengeAssignment => (
              <ChallengeCard
                challenge={challengeAssignment.challenge}
                key={challengeAssignment.challenge.id}
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
            {categoriesQuery.data.category.map(category => (
              <ChallengeCategoryCard
                category={category.value}
                key={category.value}
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
            {completedChalleges.map(challengeAssignment => (
              <ChallengeCard
                challenge={challengeAssignment.challenge}
                key={challengeAssignment.challenge.id}
                width={Dimensions.get('window').width / 3}
              />
            ))}
          </ScrollView>
        </Layout>
      </ScrollView>
    </Layout>
  )
}
