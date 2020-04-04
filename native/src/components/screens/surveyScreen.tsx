import React from 'react'
import { Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { RootNavigatorParamList } from '@components/navigation/RootNavigator'
import { RouteProp } from '@react-navigation/native'
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

export const SurveyScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params
  const [completeChallenge] = useCompleteChallengeMutation()

  const submitSurvey = (mood: MoodEnum) => {
    completeChallenge({
      variables: { mood, completed_at: new Date(), assignment_id: id },
    })
  }

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
          <TouchableOpacity onPress={() => submitSurvey(mood)} key={mood}>
            <Image source={MOOD_IMAGES[mood]} />
          </TouchableOpacity>
        ))}
      </View>
    </Layout>
  )
}
