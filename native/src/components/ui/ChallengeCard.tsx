import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { Avatar, Card, Text } from '@ui-kitten/components'

interface Challenge {
  id: string
  name: string
  color: string
  people?: string[]
}

interface Props {
  challenge: Challenge
  width: number
}

export const ChallengeCard: React.FC<Props> = ({
  challenge: { id, name, color, people },
  width,
}) => (
  <View style={{ flexDirection: 'column' }}>
    <TouchableOpacity key={id}>
      <Card
        appearance="filled"
        style={{
          backgroundColor: color,
          marginHorizontal: 8,
          width: width,
          height: width,
          borderRadius: 16,
          justifyContent: 'flex-end',
        }}
      >
        <Text category="p1" status="control">
          {name}
        </Text>
      </Card>
    </TouchableOpacity>

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
