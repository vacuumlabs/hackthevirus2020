import { Layout } from '@ui-kitten/components'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
//import { uuid } from 'react-native-uuid'
//import { client } from '../../../gql'

type SurveyScreenProps = {
  user_id: string
  challenge_id: string
}

export const SurveyScreen: React.FC<SurveyScreenProps> = ({
  user_id = '8003885c-e560-4263-a4e1-171293278a50',
  challenge_id = '554cab74-0cba-449b-ba1f-f95d108e9843',
}) => {
  const submitSurvey = emotion => {
    //client.InsertChallengeCompletition({uuid.v1(), challenge_id, user_id, new Date().toISOString(), emotion})
  }

  return (
    <Layout>
      <Image source={require('../../../assets/tada.png')} />
      <Layout style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => submitSurvey('negative')}>
          <Image source={require('../../../assets/negative.png')} />
        </TouchableOpacity>
        <Image source={require('../../../assets/neutral.png')} />
        <Image source={require('../../../assets/positive.png')} />
      </Layout>
    </Layout>
  )
}
