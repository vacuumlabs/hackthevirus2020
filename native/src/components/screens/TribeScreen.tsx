import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from '@ui-kitten/components'
import { useTeamByCodeQuery, useMyTeamQuery, useJoinTeamMutation } from '../../../graphqlSdk'
import { useGlobalState } from 'state'
import { LoadingScreen } from './LoadingScreen'

export const TribeScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useGlobalState('isLoggedIn')
  const [code, setCode] = useState('')
  const [showNotFound, setShowNotFound] = useState(false)

  const { data: teamByCodeData } = useTeamByCodeQuery({ variables: { code } }) // TODO: debounce?
  const { data: myTeamData, loading } = useMyTeamQuery()
  const [joinTeam, { error }] = useJoinTeamMutation()
  console.log({ error, teamByCodeData })

  const teamNotFound = !teamByCodeData || teamByCodeData.team.length === 0

  const onJoin = useCallback(() => {
    async function doJoin() {
      if (teamNotFound) {
        setShowNotFound(true)
        return
      }

      // TODO: check errors
      const a = await joinTeam({
        variables: { team_id: teamByCodeData.team[0].id },
        refetchQueries: ['MyTeam'],
      })
      console.log({ a, e: a.errors })
      setIsLoggedIn(true)
    }
    doJoin()
  }, [code, teamByCodeData])

  const onCreateNew = useCallback(() => {
    // TODO: navigate to another screen
  }, [])

  const onSkipJoining = useCallback(() => {
    setIsLoggedIn(true)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  if (myTeamData.member.length && !isLoggedIn) {
    setIsLoggedIn(true)
    return <LoadingScreen />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hooray! Welcome here.</Text>
      <Text>Does your family already have an account?</Text>
      <Input
        placeholder="enter a tribe code"
        value={code}
        onChangeText={code => {
          setCode(code)
          setShowNotFound(false)
        }}
      />
      {teamNotFound && showNotFound && <Text style={{ color: 'red' }}>Tribe not found.</Text>}
      <Text>
        If you don't know your Tribe Code, ask your friend that created the Tribe to share it with
        you. Or create your own Tribe.
      </Text>
      <Button style={styles.button} onPress={onJoin}>
        Log into a Tribe
      </Button>
      <Button style={styles.button} onPress={onCreateNew}>
        Create a new Tribe
      </Button>
      <Button style={styles.button} onPress={onSkipJoining}>
        Skip for now
      </Button>
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
