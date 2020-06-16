import React, { useCallback, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from '@ui-kitten/components'
import { useCreateTeamMutation, useJoinTeamMutation, useTeamByCodeQuery } from '../../../graphqlSdk'
import { useNavigation, RouteProp } from '@react-navigation/native'
import { RootNavigatorParamList } from '@components/navigation/RootNavigator'

type Props = {
  onboarding: RouteProp<RootNavigatorParamList, 'CreateTribe'>
}

export const CreateTribeScreen: React.FC<Props> = ({ onboarding }) => {
  const [code, setCode] = useState('')
  const [showUsed, setShowUsed] = useState(false)

  const { data: teamByCodeData } = useTeamByCodeQuery({ variables: { code } }) // TODO: debounce?
  const [createTeam] = useCreateTeamMutation()
  const [joinTeam] = useJoinTeamMutation()

  const usedTeamCode = teamByCodeData && teamByCodeData.team.length > 0

  const navigation = useNavigation()

  const onCreateNew = useCallback(() => {
    async function doCreate() {
      if (usedTeamCode) {
        setShowUsed(true)
        return
      }

      const team = await createTeam({
        variables: { code, name: code }, // TODO: add input for name
      })

      const teamId = team.data.insert_team.returning[0].id

      await joinTeam({
        variables: { team_id: teamId },
        refetchQueries: ['MyTeam'],
      })

      navigation.navigate('Root')
    }
    doCreate()
  }, [code, usedTeamCode, navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hooray! Welcome here.</Text>
      <Text>Let's start from the beginning.</Text>
      <Input
        placeholder="create a tribe code"
        value={code}
        onChangeText={code => {
          setCode(code)
          setShowUsed(false)
        }}
      />
      {usedTeamCode && showUsed && (
        <Text style={{ color: 'red' }}>This tribe code is already used.</Text>
      )}
      <Text>
        This Tribe Code will be used to invite people to your Tribe. You can use anything you want,
        for example "HungryBear".
      </Text>
      <Button style={styles.button} onPress={onCreateNew}>
        Create a new Tribe
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
