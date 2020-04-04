import { Layout } from '@ui-kitten/components'
import React from 'react'
import { Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
//import { uuid } from 'react-native-uuid'
//import { client } from '../../../gql'

type SurveyScreenProps = {
  user_id: string
  challenge_id: string
}

const EMOTIONS_IMAGES = {
  negative: require('../../../assets/negative.png'),
  neutral: require('../../../assets/neutral.png'),
  positive: require('../../../assets/positive.png'),
}

export const SurveyScreen: React.FC<SurveyScreenProps> = ({
  user_id = '8003885c-e560-4263-a4e1-171293278a50',
  challenge_id = '554cab74-0cba-449b-ba1f-f95d108e9843',
}) => {
  const submitSurvey = emotion => {
    //client.InsertChallengeCompletition({uuid.v1(), challenge_id, user_id, new Date().toISOString(), emotion})
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
        {['negative', 'neutral', 'positive'].map(emotion => (
          <TouchableOpacity onPress={() => submitSurvey(emotion)} key={emotion}>
            <Image source={EMOTIONS_IMAGES[emotion]} />
          </TouchableOpacity>
        ))}
      </View>
    </Layout>
  )
}
