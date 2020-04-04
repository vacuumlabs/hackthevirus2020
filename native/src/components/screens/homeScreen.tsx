import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { Button, Layout, Text } from '@ui-kitten/components'

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation()

  const navigate = () => {
    navigation.navigate('Detail')
  }
  return (
    <Layout>
      <Text>Tessssst push</Text>
      <Button children="Hjju!" status="primary" onPress={navigate} />
    </Layout>
  )
}
