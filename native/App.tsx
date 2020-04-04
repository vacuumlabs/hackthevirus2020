import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import React, {useState, useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import {client} from './gql'

import { DetailScreen, HomeScreen } from '@components/screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false)
  useEffect(() => {
    client.ExampleQuery().then(console.log)
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
          })
        }
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
