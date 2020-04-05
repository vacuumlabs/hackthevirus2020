import React, { useCallback } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

import { StackParamList } from '@components/navigation/RootNavigator'
import { Header } from '@components/ui/Header'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { Button, Layout, Text, useTheme } from '@ui-kitten/components'

import {
  Challenge_Assignment,
  useAcceptChallengeMutation,
  useChallengeQuery,
} from '../../../graphqlSdk'

type Props = {
  route: RouteProp<StackParamList, 'ChallengeDetail'>
}

type ActionButtonProps = {
  assignments: Array<Pick<Challenge_Assignment, 'completed_at' | 'id'>>
  challengeId: string
}

const userId = '8003885c-e560-4263-a4e1-171293278a50'
const photoDimensions = { width: 120, height: 200 }
const photoOffset = 30

const ActionButton: React.FC<ActionButtonProps> = ({ assignments, challengeId }) => {
  const [acceptChallenge, { loading }] = useAcceptChallengeMutation()
  const navigation = useNavigation()

  const onAcceptChallenge = useCallback(() => {
    async function doAccept() {
      await acceptChallenge({
        variables: { challenge_id: challengeId, user_id: userId },
        refetchQueries: ['AcceptedChallenges', 'ChallengesByCategory'],
      })
      navigation.navigate('Home')
    }
    doAccept()
  }, [acceptChallenge, challengeId, navigation])

  const onCompleteChallenge = useCallback(() => {
    navigation.navigate('CompleteChallenge', { assignmentId: assignments[0].id })
  }, [navigation, assignments])

  if (assignments.length === 0) {
    return (
      <Button status="primary" onPress={onAcceptChallenge} disabled={loading}>
        Accept the challenge
      </Button>
    )
  }
  if (!assignments[0].completed_at) {
    return (
      <Button status="primary" onPress={onCompleteChallenge}>
        Complete the challenge
      </Button>
    )
  }
  return <View />
}

export const DetailScreen: React.FC<Props> = ({ route }) => {
  const theme = useTheme()
  const navigation = useNavigation()

  const { id } = route.params
  const { data, loading, error } = useChallengeQuery({
    variables: { id },
    fetchPolicy: 'cache-and-network',
  })

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error || !data || !data.challenge_by_pk) {
    return <Text>Error!</Text>
  }

  const {
    challenge_by_pk: { name, description, challenge_assignments },
  } = data

  const assignment = challenge_assignments[0]

  return (
    <Layout style={{ flex: 1 }}>
      <Header title={name} style={{ paddingBottom: photoDimensions.height - 30 }} />
      <Layout
        style={{
          backgroundColor: theme['color-warning-500'],
          flex: 1,
          paddingHorizontal: 10,
          paddingVertical: 20,
          justifyContent: 'space-between',
        }}
      >
        <View>
          <View
            style={{
              height: photoDimensions.height,
              width: photoDimensions.width,
              alignSelf: 'flex-end',
              marginTop: -photoDimensions.height + photoOffset,
              marginBottom: photoOffset,
              marginRight: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TakePhoto', { assignmentId: assignment.id })
              }}
              style={{ flex: 1 }}
            >
              {assignment.attachment ? (
                <Image
                  style={{
                    height: photoDimensions.height,
                    width: photoDimensions.width,
                    borderRadius: 12,
                  }}
                  source={{ uri: `data:image/jpeg;base64,${assignment.attachment}` }}
                />
              ) : (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(230, 230, 230, 0.6)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 12,
                  }}
                >
                  <Text style={{ maxWidth: 40, textAlign: 'center' }}>Add your story</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <Text appearance="alternative" style={{ fontSize: 18, fontFamily: 'OpenSans-Bold' }}>
            {description}
          </Text>
        </View>

        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <ActionButton assignments={challenge_assignments} challengeId={id} />
        </View>
      </Layout>
    </Layout>
  )
}
