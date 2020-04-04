import { ChallengeCard } from '@components/ui/ChallengeCard'
import { spacing } from '@components/ui/constants'
import { useNavigation } from '@react-navigation/native'
import { Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const COLORS = {
  orange: '#ffc342',
  lightbrown: '#f5efe3',
  navy: '#0c2945',
  cyan: '#37a2a4',
  white: '#ffffff',
}

const CHALLENGES = [
  {
    id: '1',
    name: 'Call a family member',
    color: COLORS.orange,
    people: ['https://i.pravatar.cc/300', 'https://i.pravatar.cc/300', 'https://i.pravatar.cc/300'],
  },
  {
    id: '2',
    name: 'Tidy up around you',
    color: COLORS.navy,
    people: ['https://i.pravatar.cc/300', 'https://i.pravatar.cc/300'],
  },
  {
    id: '3',
    name: 'Call a family member',
    color: COLORS.cyan,
    people: ['https://i.pravatar.cc/300'],
  },
]

const CHALLENGES2 = CHALLENGES.map(challenge => {
  const { people, ...rest } = challenge
  return { ...rest, color: COLORS.lightbrown }
})

const CHALLENGES3 = CHALLENGES.map(challenge => {
  const { people, ...rest } = challenge
  return rest
})

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation()

  const navigate = () => {
    navigation.navigate('Detail')
  }
  return (
    <Layout style={{ flex: 1 }} level="1">
      <Layout level="3">
        <SafeAreaView>
          <Text
            category="h3"
            style={{ marginLeft: spacing[4], marginBottom: spacing[4], marginTop: spacing[6] }}
          >
            Your challenges
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: spacing[3] }}
          >
            {CHALLENGES.map(challenge => (
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
          <Text
            category="h6"
            style={{ marginLeft: spacing[4], marginBottom: spacing[4], marginTop: spacing[5] }}
          >
            Find a new challenge
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: spacing[3] }}
          >
            {CHALLENGES2.map(challenge => (
              <ChallengeCard
                challenge={challenge}
                key={challenge.id}
                width={Dimensions.get('window').width / 3}
              />
            ))}
          </ScrollView>

          <Text
            category="h6"
            style={{ marginLeft: spacing[4], marginBottom: spacing[4], marginTop: spacing[5] }}
          >
            See your previous challenges
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: spacing[3] }}
          >
            {CHALLENGES3.map(challenge => (
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
