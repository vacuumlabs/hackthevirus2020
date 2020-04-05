import { categoryMapping } from 'helpers'
import React, { useCallback } from 'react'
import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { Card, Text, useTheme } from '@ui-kitten/components'

interface Props {
  category: string
  width: number
}

export const ChallengeCategoryCard: React.FC<Props> = ({ category, width }) => {
  const navigation = useNavigation()

  const theme = useTheme()

  const navigateToCategory = useCallback(() => {
    navigation.navigate('Category', { category })
  }, [category, navigation])
  return (
    <View style={{ flexDirection: 'column' }}>
      <Card
        appearance="filled"
        style={{
          backgroundColor: theme['color-info-500'],
          marginHorizontal: 8,
          width: width,
          height: width,
          borderRadius: 16,
          justifyContent: 'flex-end',
        }}
        onPress={navigateToCategory}
      >
        <Text category="p1" style={{ fontFamily: 'OpenSans-Bold' }}>
          {categoryMapping[category]}
        </Text>
      </Card>
    </View>
  )
}
