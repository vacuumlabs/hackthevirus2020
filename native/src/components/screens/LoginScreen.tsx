import React, { useCallback, useState, useEffect } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthSession } from 'expo'
import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store'
import * as Random from 'expo-random'
import jwtDecode from 'jwt-decode'
import { useGlobalState } from '../../state'

import { Button, Text } from '@ui-kitten/components'

const auth0ClientId = 'defV5g356Vp5OideZtmLxs7VzkXkSTIT'
const auth0Domain = 'https://bearwithlife.eu.auth0.com'

export const LoginScreen = () => {
  const [name, setName] = useState('')
  const [userId, setUserId] = useGlobalState('userId')
  const [token, setToken] = useGlobalState('token')

  const navigation = useNavigation()

  useEffect(() => {
    if (token) {
      return
    }

    getItemAsync('token').then(token => {
      let decoded
      try {
        decoded = jwtDecode(token)
      } catch {
        deleteItemAsync('token')
        deleteItemAsync('userId')
        return
      }

      if (Date.now() > decoded.exp * 1000) {
        // token is expired
        deleteItemAsync('token')
        deleteItemAsync('userId')
      } else {
        setToken(token)
        setUserId(decoded.sub)
        navigation.navigate('Root')
      }
    })
  }, [navigation])

  const handleResponse = useCallback(
    response => {
      if (response.error) {
        Alert.alert('Authentication error', response.error_description || 'something went wrong')
        return
      }

      // Retrieve the JWT token and decode it
      const jwtToken = response.id_token
      const decoded = jwtDecode(jwtToken)
      const userId = decoded.sub
      const token = response.id_token

      setName(decoded.name)
      setToken(token)
      setUserId(userId)
      setItemAsync('token', token)
      navigation.navigate('JoinTribe')
    },
    [navigation],
  )

  const login = useCallback(async () => {
    // Retrieve the redirect URL, add this to the callback URL list
    // of your Auth0 application.
    const redirectUrl = AuthSession.getRedirectUrl()
    console.log(`Redirect URL: ${redirectUrl}`)

    // Structure the auth parameters and URL
    const queryParams = toQueryString({
      client_id: auth0ClientId,
      redirect_uri: redirectUrl,
      response_type: 'id_token token', // id_token will return a JWT token
      scope: 'openid profile', // retrieve the user's profile
      nonce: (await Random.getRandomBytesAsync(12)).toString(), // ideally, this will be a random value
    })
    const authUrl = `${auth0Domain}/authorize` + queryParams

    // Perform the authentication
    const response = await AuthSession.startAsync({ authUrl })
    console.log('Authentication response', response)

    if (response.type === 'success') {
      handleResponse(response.params)
    }
  }, [])

  return (
    <View style={styles.container}>
      {name ? (
        <Text style={styles.title}>You are logged in, {name}!</Text>
      ) : (
        <Button onPress={login}>Log in</Button>
      )}
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
})

/**
 * Converts an object to a query string.
 */
function toQueryString(params) {
  return (
    '?' +
    Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&')
  )
}
