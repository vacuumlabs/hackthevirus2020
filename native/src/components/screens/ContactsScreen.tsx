import React, { useCallback, useState, useEffect } from 'react'
import { Alert, StyleSheet, View, Image } from 'react-native'
import { useGlobalState } from '../../state'

import { Button, Text } from '@ui-kitten/components'
import { useMyTeamQuery } from '../../../graphqlSdk'
import { LoadingScreen } from './LoadingScreen'
import { useNavigation } from '@react-navigation/native'

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

  const navigation = useNavigation()

  const onJoin = useCallback(() => {
    navigation.navigate('JoinTribe', { onboarding: false })
  }, [navigation])

  const onCreateNew = useCallback(() => {
    navigation.navigate('CreateTribe', { onboarding: false })
  }, [navigation])

  if (loading) {
    return <LoadingScreen />
  }

  if (data.member.length === 0) {
    return (
      <View>
        <Text>You are not a member of any tribe. Join or create one.</Text>
        <Button style={styles.button} onPress={onJoin}>
          Log into a Tribe
        </Button>
        <Button style={styles.button} onPress={onCreateNew}>
          Create a new Tribe
        </Button>
      </View>
    )
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
  button: {
    marginTop: 20,
  },
})
