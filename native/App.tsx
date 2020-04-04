import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import React, { useState } from 'react'

import { ApolloProvider } from '@apollo/react-hooks'
import { RootNavigator } from '@components/navigation/RootNavigator'
import { light as lightTheme, mapping } from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'

import { default as customMapping } from './custom-mapping.json'
import { default as appTheme } from './custom-theme.json'
import { client } from './gql'

const theme = { ...lightTheme, ...appTheme }

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false)

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
    <ApolloProvider client={client}>
      {/* 
      // @ts-ignore */}
      <ApplicationProvider mapping={mapping} theme={theme} customMapping={customMapping}>
        <RootNavigator />
      </ApplicationProvider>
    </ApolloProvider>
  )
}
