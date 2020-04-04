import React from 'react'
import { StyleSheet, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Button, Text } from '../ui/'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontWeight: 'bold' },
})

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation()

  const navigate = () => {
    navigation.navigate('Detail')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tessssst push</Text>
      <Button size="small" title="Hjju!" variant="primary" onPress={navigate} />
    </View>
  )
}
