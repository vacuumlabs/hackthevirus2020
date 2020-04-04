import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import React, { useEffect, useState } from 'react'

import { RootNavigator } from '@components/navigation/RootNavigator'

import { client } from './gql'

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

  return <RootNavigator />
}
