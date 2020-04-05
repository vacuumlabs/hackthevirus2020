import React, { useCallback, useEffect, useState } from 'react'
import {
  AsyncStorage,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native'
import { v4 } from 'uuid'

import { Button, Input, Layout, Text, useTheme } from '@ui-kitten/components'

import { useCreateUserMutation } from '../../../graphqlSdk'
import { useGlobalState } from '../../state'

const USER_ID_STORAGE_KEY = '@user_id'

export const LoginScreen: React.FC = () => {
  const [finishedLoadingUser, setFinishedLoadingUser] = useState(false)
  const [username, setUsername] = useState('')

  const [userId, setUserId] = useGlobalState('userId')

  const [createUser, { loading }] = useCreateUserMutation()

  const theme = useTheme()

  useEffect(() => {
    async function getUserId() {
      try {
        const userId = await AsyncStorage.getItem(USER_ID_STORAGE_KEY)
        if (userId) {
          console.log('ASYNC', userId)
          setUserId(userId)
        }
        setFinishedLoadingUser(true)
      } catch {
        setFinishedLoadingUser(true)
      }
    }
    getUserId()
  }, [])

  const registerUser = useCallback(() => {
    async function doRegistration() {
      const uuid = v4()
      console.log(uuid)
      try {
        const { data } = await createUser({ variables: { user_id: uuid, username } })
        if (data.insert_user.affected_rows > 0) {
          await AsyncStorage.setItem(USER_ID_STORAGE_KEY, uuid)
          setUserId(uuid)
        }
      } catch {
        // do nothing
      }
    }
    doRegistration()
  }, [])

  if (!finishedLoadingUser) {
    return <Text>Loading...</Text>
  }

  return (
    <Layout style={{ flex: 1, paddingHorizontal: 24 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'position' : 'height'}
          style={{
            flex: 1,
            alignItems: 'center',
          }}
        >
          <Text
            category="h4"
            style={{
              color: theme['color-primary-500'],
              fontFamily: 'AbrilFatface-Regular',
              marginBottom: 16,
              marginTop: 150,
              textAlign: 'center',
            }}
          >
            Hooray!
          </Text>
          <Input
            style={{
              marginTop: 24,
              marginBottom: 'auto',
              marginHorizontal: 24,
              minWidth: 200,
            }}
            placeholder="Choose username"
            value={username}
            onChangeText={setUsername}
          />
        </KeyboardAvoidingView>
        <Button onPress={registerUser} disabled={loading}>
          Register
        </Button>
        <Image
          source={require('../../../assets/bear.png')}
          style={{
            width: Dimensions.get('window').width / 1,
            resizeMode: 'contain',
            position: 'absolute',
            bottom: -50,
            left: -200,
            height: 500,
            zIndex: -1,
          }}
        />
      </SafeAreaView>
    </Layout>
  )
}
