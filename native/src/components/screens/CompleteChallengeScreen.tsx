import React, { useCallback } from 'react'
import { Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { RootNavigatorParamList } from '@components/navigation/RootNavigator'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { Layout } from '@ui-kitten/components'

import { Mood_Enum as MoodEnum, useCompleteChallengeMutation } from '../../../graphqlSdk'

const MOOD_IMAGES: Record<MoodEnum, any> = {
  NEGATIVE: require('../../../assets/negative.png'),
  NEUTRAL: require('../../../assets/neutral.png'),
  POSITIVE: require('../../../assets/positive.png'),
}

const MOODS = [MoodEnum.Negative, MoodEnum.Neutral, MoodEnum.Positive]

type Props = {
  route: RouteProp<RootNavigatorParamList, 'CompleteChallenge'>
}

type CompleteButtonProps = {
  assignmentId: string
  mood: MoodEnum
}

const CompleteButton: React.FC<CompleteButtonProps> = ({ mood, assignmentId }) => {
  const [completeChallenge] = useCompleteChallengeMutation()
  const navigation = useNavigation()

  const onCompleteChallenge = useCallback(() => {
    async function doComplete() {
      await completeChallenge({
        variables: { assignment_id: assignmentId, mood, completed_at: new Date() },
        refetchQueries: ['CompletedChallenges', 'AcceptedChallenges'],
      })
      navigation.navigate('Home')
    }
    doComplete()
  }, [assignmentId, completeChallenge, navigation, mood])

  return (
    <TouchableOpacity onPress={onCompleteChallenge}>
      <Image source={MOOD_IMAGES[mood]} />
    </TouchableOpacity>
  )
}

export const CompleteChallengeScreen: React.FC<Props> = ({ route }) => {
  const { assignmentId } = route.params

  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../../../assets/tada.png')}
        style={{ height: 240, resizeMode: 'contain', marginBottom: 100, marginTop: -160 }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        {MOODS.map(mood => (
          <CompleteButton mood={mood} key={mood} assignmentId={assignmentId} />
        ))}
      </View>
    </Layout>
  )
}
