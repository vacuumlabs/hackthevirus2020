import _ from 'lodash'
import React, { useCallback } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { Avatar, Card, Text } from '@ui-kitten/components'

const COLORS = {
  orange: '#ffc342',
  navy: '#0c2945',
  cyan: '#37a2a4',
}

interface Challenge {
  id: string
  name: string
  color?: string
  people?: string[]
}

interface Props {
  challenge: Challenge
  width: number
  style?: StyleProp<ViewStyle>
}

const ChallengeCardComponent: React.FC<Props> = ({
  challenge: { id, name, color, people },
  width,
  style,
}) => {
  const navigation = useNavigation()

  const navigateToChallenge = useCallback(() => {
    navigation.navigate('ChallengeDetail', { id })
  }, [id, navigation])
  return (
    <View style={[{ flexDirection: 'column' }, style]}>
      <Card
        appearance="filled"
        style={{
          backgroundColor: color || _.sample(COLORS),
          marginHorizontal: 8,
          width: width,
          height: width,
          borderRadius: 16,
          justifyContent: 'flex-end',
        }}
        onPress={navigateToChallenge}
      >
        <Text category="p1" style={{ fontFamily: 'OpenSans-Bold' }} status="control">
          {name}
        </Text>
      </Card>

      {people && (
        <View
          style={{
            marginTop: 16,
            marginLeft: 32,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {people.slice(0, 2).map((avatar, index) => (
            <Avatar style={{ marginLeft: -16 }} key={index} source={{ uri: avatar }} />
          ))}
          {people.length > 2 && (
            <Text category="h6" style={{ marginLeft: 8 }}>{`+${people.length - 2}`}</Text>
          )}
        </View>
      )}
    </View>
  )
}

export const ChallengeCard = React.memo(ChallengeCardComponent)
