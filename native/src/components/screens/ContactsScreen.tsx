import React, { useCallback, useState, useEffect } from 'react'
import { Alert, StyleSheet, View, Image } from 'react-native'
import { useGlobalState } from '../../state'

import { Button, Text } from '@ui-kitten/components'
import { useMyTeamQuery } from '../../../graphqlSdk'
import { LoadingScreen } from './LoadingScreen'

// TODO: improve UI
const Contact = ({ user }) => {
  return (
    <View key={user.id}>
      <Image
        style={{
          height: 100,
          width: 100,
          borderRadius: 12,
        }}
        source={{ uri: user.avatar }}
      ></Image>
      <Text>{user.name}</Text>
    </View>
  )
}

export const ContactsScreen = () => {
  const { data, loading } = useMyTeamQuery()

  if (loading) {
    return <LoadingScreen />
  }

  if (data.member.length === 0) {
    return <Text>Join tribe.</Text>
  }

  const users = data.member[0].team.members.map(({ user }) => user)

  return (
    <View>
      {users.map(user => (
        <Contact key={user.id} user={user} />
      ))}
    </View>
  )
}
