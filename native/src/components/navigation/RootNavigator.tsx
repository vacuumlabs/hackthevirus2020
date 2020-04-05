import React from 'react'
import { View } from 'react-native'

import {
  CategoryScreen,
  CompleteChallengeScreen,
  DetailScreen,
  HomeScreen,
  TakePhotoScreen,
} from '@components/screens'
import { spacing } from '@components/ui/constants'
import { FontAwesome5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from '@ui-kitten/components'

export type RootNavigatorParamList = {
  Root: undefined
  CompleteChallenge: { assignmentId: string }
  TakePhoto: { id: string }
}

export type StackParamList = {
  Home: undefined
  ChallengeDetail: { id: string }
  Category: { category: string }
}

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator<StackParamList>()
const RootStack = createStackNavigator<RootNavigatorParamList>()

const ChallengeNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="Home" headerMode="none">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ChallengeDetail" component={DetailScreen} />
    <Stack.Screen name="Category" component={CategoryScreen} />
  </Stack.Navigator>
)

const TabNavigator: React.FC = () => {
  const theme = useTheme()
  return (
    <Tab.Navigator
      initialRouteName="Challenges"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Challenges') {
            iconName = focused ? 'hand-holding-heart' : 'hand-holding-heart'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog' : 'cog'
          } else if (route.name === 'Contacts') {
            iconName = focused ? 'users' : 'users'
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: theme['color-warning-500'],
        inactiveTintColor: 'gray',
        style: {
          paddingTop: spacing[3],
        },
      }}
    >
      <Tab.Screen name="Contacts" component={View} />
      <Tab.Screen name="Challenges" component={ChallengeNavigator} />
      <Tab.Screen name="Settings" component={View} />
    </Tab.Navigator>
  )
}

export const RootNavigator: React.FC = () => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="Root" headerMode="none">
      <RootStack.Screen name="Root" component={TabNavigator} />
      {/* NOTE: Showing screens above tabs this way. Maybe there is better way in react-navigationn5 but don't have time to find out. */}
      <RootStack.Screen name="CompleteChallenge" component={CompleteChallengeScreen} />
      <RootStack.Screen name="TakePhoto" component={TakePhotoScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
)
