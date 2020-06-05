import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { getItemAsync, deleteItemAsync } from 'expo-secure-store'
import jwtDecode from 'jwt-decode'

import { ApolloProvider } from '@apollo/react-hooks'
import { RootNavigator } from '@components/navigation/RootNavigator'
import { light as lightTheme, mapping } from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'

import { default as customMapping } from './custom-mapping.json'
import { default as appTheme } from './custom-theme.json'
import { getClient } from './gql'
import { useGlobalState } from 'state'

const theme = { ...lightTheme, ...appTheme }

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false)

  const [userId, setUserId] = useGlobalState('userId')
  const [token, setToken] = useGlobalState('token')
  useEffect(() => {
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
      }
    })
  })

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={() =>
          Font.loadAsync({
            'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
            'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
            'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
            'OpenSans-LightItalic': require('./assets/fonts/OpenSans-LightItalic.ttf'),
            'OpenSans-Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
            'OpenSans-BoldItalic': require('./assets/fonts/OpenSans-BoldItalic.ttf'),
            'AbrilFatface-Regular': require('./assets/fonts/AbrilFatface-Regular.ttf'),
          })
        }
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

  const applicationProvider = (
    // @ts-ignore
    <ApplicationProvider mapping={mapping} theme={theme} customMapping={customMapping}>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </ApplicationProvider>
  )

  return (
    <ApolloProvider client={getClient(token)}>
      {/*
      // @ts-ignore */}
      <ApplicationProvider mapping={mapping} theme={theme} customMapping={customMapping}>
        <StatusBar barStyle="dark-content" />
        <RootNavigator />
      </ApplicationProvider>
    </ApolloProvider>
  )
}
