import { CategoryScreen, DetailScreen, HomeScreen, SurveyScreen } from '@components/screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { default as React } from 'react'

export type RootNavigatorParamList = {
  Home: undefined
  ChallengeDetail: { id: string }
  CompleteChallenge: { id: string }
  Category: { category: string }
}

const Stack = createStackNavigator<RootNavigatorParamList>()

export const RootNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ChallengeDetail" component={DetailScreen} />
      <Stack.Screen name="CompleteChallenge" component={SurveyScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
)
