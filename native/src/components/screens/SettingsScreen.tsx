import React, { useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from '@ui-kitten/components'
import { deleteItemAsync } from 'expo-secure-store'
import { useNavigation } from '@react-navigation/native'
import { useMyTeamQuery, useLeaveTeamMutation } from '../../../graphqlSdk'

export const SettingsScreen = () => {
  const { data: myTeamData, loading } = useMyTeamQuery()
  const [leaveTeam] = useLeaveTeamMutation()

  const navigation = useNavigation()

  const onLogout = useCallback(() => {
    async function doLogout() {
      await deleteItemAsync('token')
      await deleteItemAsync('userId')
      navigation.navigate('Login')
    }
    doLogout()
  }, [navigation])

  const onLeaveTribe = useCallback(() => {
    async function doLeaveTribe() {
      const teamId = myTeamData.member[0].team.id
      await leaveTeam({ variables: { team_id: teamId }, refetchQueries: ['MyTeam'] })
    }
    doLeaveTribe()
  }, [myTeamData])

  const isMember = myTeamData && myTeamData.member.length > 0

  return (
    <View>
      <Button style={styles.button} onPress={onLogout}>
        Log out
      </Button>
      <Button style={styles.button} onPress={onLeaveTribe} disabled={!isMember}>
        Leave tribe
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
