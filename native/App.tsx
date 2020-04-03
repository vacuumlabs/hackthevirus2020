import {Button, Text} from '@components/ui'
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false)
  return fontsLoaded ? (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}>Test push</Text>
      <Button size="small" title="Hu!" variant="primary" onPress={() => null} />
    </View>
  ) : (
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
