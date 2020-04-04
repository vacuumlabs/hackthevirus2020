import React from 'react'
import { StyleSheet, View } from 'react-native'

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

export const DetailScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test push</Text>
      <Button size="small" title="Huaaaaaaa!" variant="primary" onPress={() => null} />
    </View>
  )
}
