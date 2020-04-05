import { categoryMapping } from 'helpers'
import React from 'react'
import { Dimensions } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import { RootNavigatorParamList } from '@components/navigation/RootNavigator'
import { ChallengeCard } from '@components/ui/ChallengeCard'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { Layout, Text } from '@ui-kitten/components'

import { useChallengesByCategoryQuery } from '../../../graphqlSdk'

type Props = {
  route: RouteProp<RootNavigatorParamList, 'Category'>
}

export const CategoryScreen: React.FC<Props> = ({ route }) => {
  const { category } = route.params
  const { data, loading, error } = useChallengesByCategoryQuery({
    variables: { user_id: '8003885c-e560-4263-a4e1-171293278a50', category },
  })

  const navigation = useNavigation()

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error || !data.category_by_pk.challenges) {
    return <Text>Error!</Text>
  }

  const { challenges } = data.category_by_pk

  return (
    <Layout style={{ flex: 1 }} level="1">
      <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
          style={{ marginLeft: 8, marginTop: 8 }}
        >
          <MaterialCommunityIcons name="keyboard-backspace" size={40} color="#0c2945" />
        </TouchableOpacity>
        <Text
          category="h3"
          style={{ marginLeft: 16, marginBottom: 16, fontFamily: 'OpenSans-Bold' }}
        >
          {categoryMapping[category]} challenges
        </Text>
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
      </SafeAreaView>
    </Layout>
  )
}
