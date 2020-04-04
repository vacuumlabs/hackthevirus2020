import { RootNavigatorParamList } from '@components/navigation/RootNavigator'
import { ChallengeCard } from '@components/ui/ChallengeCard'
import { RouteProp } from '@react-navigation/native'
import { Layout, Text } from '@ui-kitten/components'
import { categoryMapping } from 'helpers'
import React from 'react'
import { Dimensions, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useChallengesByCategoryQuery } from '../../../graphqlSdk'

type Props = {
  route: RouteProp<RootNavigatorParamList, 'Category'>
}

export const CategoryScreen: React.FC<Props> = ({ route }) => {
  const { category } = route.params
  const { data, loading, error } = useChallengesByCategoryQuery({
    variables: { user_id: '8003885c-e560-4263-a4e1-171293278a50', category },
  })
  const challenges = data?.category_by_pk?.challenges

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error || !challenges) {
    return <Text>Error!</Text>
  }

  return (
    <Layout style={{ flex: 1 }} level="1">
      <Layout level="3">
        <SafeAreaView>
          <Text category="h3" style={{ marginLeft: 16, marginBottom: 16, marginTop: 32 }}>
            {categoryMapping[category]} challenges
          </Text>
          <ScrollView>
            {challenges.map(challenge => (
              <ChallengeCard
                challenge={challenge}
                key={challenge.id}
                width={Dimensions.get('window').width / 3}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </Layout>
    </Layout>
  )
}
