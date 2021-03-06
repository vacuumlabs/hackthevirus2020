import { categoryMapping } from 'helpers'
import React from 'react'
import { Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useGlobalState } from 'state'

import { StackParamList } from '@components/navigation/RootNavigator'
import { ChallengeCard } from '@components/ui/ChallengeCard'
import { Header } from '@components/ui/Header'
import { RouteProp } from '@react-navigation/native'
import { Layout, Text } from '@ui-kitten/components'

import { useChallengesByCategoryQuery } from '../../../graphqlSdk'

type Props = {
  route: RouteProp<StackParamList, 'Category'>
}

export const CategoryScreen: React.FC<Props> = ({ route }) => {
  const { category } = route.params
  const [userId] = useGlobalState('userId')
  const { data, loading, error } = useChallengesByCategoryQuery({
    variables: { user_id: userId, category },
  })

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error || !data.category_by_pk.challenges) {
    return <Text>Error!</Text>
  }

  const { challenges } = data.category_by_pk

  return (
    <Layout style={{ flex: 1 }} level="1">
      <Header title={`${categoryMapping[category]} challenges`} />
      <FlatList
        data={challenges}
        numColumns={2}
        renderItem={({ item }) => (
          <ChallengeCard
            challenge={item}
            width={Dimensions.get('window').width / 2.18}
            style={{ marginBottom: 16 }}
          />
        )}
      />
    </Layout>
  )
}
