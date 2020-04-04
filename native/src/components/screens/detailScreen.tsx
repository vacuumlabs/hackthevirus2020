import React from 'react'
import { View } from 'react-native'

import { Button, Layout, Text, useTheme } from '@ui-kitten/components'

const challengeTitle = 'Call a family member'

const challengeText =
  "Surprise a family member who is not expecting a call from you. Find out something that you didn't know about them."

export const DetailScreen: React.FC = () => {
  const theme = useTheme()
  return (
    <Layout style={{ flex: 1 }}>
      <Layout style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
        <Text category="h3" status="primary" style={{ maxWidth: 200, fontFamily: 'OpenSans-Bold' }}>
          {challengeTitle}
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
          {challengeText}
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
