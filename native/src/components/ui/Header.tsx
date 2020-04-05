import React from 'react'
import { TouchableOpacity } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Layout, Text, useTheme } from '@ui-kitten/components'

type Props = {
  title?: string
}

export const Header: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation()
  const theme = useTheme()
  return (
    <Layout style={{ paddingHorizontal: 16, paddingVertical: 32 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
        style={{ marginTop: 16 }}
      >
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={40}
          color={theme['color-primary-500']}
        />
      </TouchableOpacity>
      <Text category="h3" status="primary" style={{ maxWidth: 200, fontFamily: 'OpenSans-Bold' }}>
        {title}
      </Text>
    </Layout>
  )
}
