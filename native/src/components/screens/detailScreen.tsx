import React from 'react'
import { View } from 'react-native'

import { RootNavigatorParamList } from '@components/navigation/RootNavigator'
import { RouteProp } from '@react-navigation/native'
import { Button, Layout, Text, useTheme } from '@ui-kitten/components'

import { useChallengeQuery } from '../../../graphqlSdk'

type Props = {
  route: RouteProp<RootNavigatorParamList, 'ChallengeDetail'>
}

export const DetailScreen: React.FC<Props> = ({ route }) => {
  const theme = useTheme()

  const { id } = route.params
  const { data, loading, error } = useChallengeQuery({ variables: { id } })

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error || !data || !data.challenge_by_pk) {
    return <Text>Error!</Text>
  }

  const {
    challenge_by_pk: { name, description },
  } = data

  return (
    <Layout style={{ flex: 1 }}>
      <Layout style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
        <Text category="h3" status="primary" style={{ maxWidth: 200, fontFamily: 'OpenSans-Bold' }}>
          {name}
        </Text>
      </Layout>
      <Layout
        style={{
          backgroundColor: theme['color-warning-500'],
          flex: 1,
          paddingHorizontal: 10,
          paddingVertical: 20,
          justifyContent: 'space-between',
        }}
      >
        <Text appearance="alternative" style={{ fontSize: 18, fontFamily: 'OpenSans-Bold' }}>
          {description}
        </Text>

        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <Button status="primary" onPress={() => null}>
            Accept the challenge
          </Button>
        </View>
      </Layout>
    </Layout>
  )
}
