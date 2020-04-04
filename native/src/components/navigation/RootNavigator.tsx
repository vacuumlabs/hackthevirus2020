import React from 'react'

import {
  CategoryScreen,
  CompleteChallengeScreen,
  DetailScreen,
  HomeScreen,
} from '@components/screens'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export type RootNavigatorParamList = {
  Home: undefined
  ChallengeDetail: { id: string }
  Category: { category: string }
  CompleteChallenge: { assignmentId: string }
}

const Stack = createStackNavigator<RootNavigatorParamList>()

export const RootNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ChallengeDetail" component={DetailScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="CompleteChallenge" component={CompleteChallengeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)
