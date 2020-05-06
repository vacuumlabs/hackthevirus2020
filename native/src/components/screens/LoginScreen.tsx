import React, { useCallback, useState, useGlobal } from 'reactn'
import { Alert, StyleSheet, View } from 'react-native'
import { AuthSession } from 'expo'
import { setItemAsync } from 'expo-secure-store'
import * as Random from 'expo-random'
import jwtDecode from 'jwt-decode'

import { Button, Input, Layout, Text, useTheme } from '@ui-kitten/components'

const auth0ClientId = 'defV5g356Vp5OideZtmLxs7VzkXkSTIT'
const auth0Domain = 'https://bearwithlife.eu.auth0.com'

export const LoginScreen = () => {
  const [name, setName] = useState('')
  const [token, setToken] = useGlobal('token')
  const handleResponse = useCallback(response => {
    if (response.error) {
      Alert.alert('Authentication error', response.error_description || 'something went wrong')
      return
    }

    // Retrieve the JWT token and decode it
    const jwtToken = response.id_token
    const decoded = jwtDecode(jwtToken)
    setItemAsync('token', jwtToken)
    setName(decoded.name)
  }, [])

  const login = useCallback(async () => {
    // Retrieve the redirect URL, add this to the callback URL list
    // of your Auth0 application.
    const redirectUrl = AuthSession.getRedirectUrl()
    console.log(`Redirect URL: ${redirectUrl}`)

    // Structure the auth parameters and URL
    const queryParams = toQueryString({
      client_id: auth0ClientId,
      redirect_uri: redirectUrl,
      response_type: 'id_token', // id_token will return a JWT token
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
