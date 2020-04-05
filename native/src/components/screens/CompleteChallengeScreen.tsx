import React, { useCallback, useState } from 'react'
import { Dimensions, Image, KeyboardAvoidingView, Platform, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import { RootNavigatorParamList } from '@components/navigation/RootNavigator'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { Button, Input, Layout, Text } from '@ui-kitten/components'

import { Mood_Enum as MoodEnum, useCompleteChallengeMutation } from '../../../graphqlSdk'

const MOOD_ICONS: Record<MoodEnum, any> = {
  NEGATIVE: 'emoticon-sad',
  NEUTRAL: 'emoticon-neutral',
  POSITIVE: 'emoticon-happy',
}

const MOODS = [MoodEnum.Negative, MoodEnum.Neutral, MoodEnum.Positive]

type Props = {
  route: RouteProp<RootNavigatorParamList, 'CompleteChallenge'>
}

export const CompleteChallengeScreen: React.FC<Props> = ({ route }) => {
  const { assignmentId } = route.params
  const [completeChallenge, { loading }] = useCompleteChallengeMutation()

  const [selectedMood, setSelectedMood] = useState(null)
  const [note, setNote] = useState('')

  const navigation = useNavigation()

  const onCompleteChallenge = useCallback(() => {
    async function doComplete() {
      await completeChallenge({
        variables: {
          assignment_id: assignmentId,
          mood: selectedMood,
          note,
          completed_at: new Date(),
        },
        refetchQueries: ['CompletedChallenges', 'AcceptedChallenges'],
      })
      navigation.navigate('Home')
    }
    doComplete()
  }, [assignmentId, completeChallenge, navigation, selectedMood, note])

  return (
    <Layout style={{ flex: 1, backgroundColor: '#112D42', paddingHorizontal: 24 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'position' : 'height'}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Image
            source={require('../../../assets/bear.png')}
            style={{
              width: Dimensions.get('window').width / 1,
              resizeMode: 'contain',
              position: 'absolute',
              top: -350,
              left: -100,
              height: 500,
              transform: [{ rotateZ: '180deg' }],
            }}
          />
          <Text
            category="h4"
            style={{
              color: '#FFC342',
              fontFamily: 'AbrilFatface-Regular',
              marginBottom: 16,
              marginTop: 100,
              textAlign: 'center',
            }}
          >
            Hooray!
          </Text>
          <Text
            category="control"
            style={{
              marginBottom: 40,
              textAlign: 'center',
              fontFamily: 'OpenSans-Bold',
              paddingHorizontal: 24,
            }}
          >
            You just completed a challenge. How do you feel about it?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
            }}
          >
            {MOODS.map(mood => (
              <TouchableOpacity onPress={() => setSelectedMood(mood)} key={mood}>
                <MaterialCommunityIcons
                  name={MOOD_ICONS[mood]}
                  size={64}
                  color={selectedMood === mood ? '#37a2a4' : '#fff'}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Input
            style={{
              opacity: selectedMood ? 1 : 0,
              borderColor: 'transparent',
              color: 'red',
              marginTop: 24,
              marginBottom: 'auto',
              marginHorizontal: 24,
            }}
            placeholder="How did the challenge help you?"
            value={note}
            onChangeText={setNote}
          />
        </KeyboardAvoidingView>
        <Button status="warning" onPress={onCompleteChallenge} disabled={loading}>
          Submit
        </Button>
      </SafeAreaView>
    </Layout>
  )
}
