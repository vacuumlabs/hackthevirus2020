import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { getItemAsync, deleteItemAsync } from 'expo-secure-store'

import {
  CategoryScreen,
  CompleteChallengeScreen,
  DetailScreen,
  HomeScreen,
  TakePhotoScreen,
} from '@components/screens'
import { LoginScreen } from '@components/screens/LoginScreen'
import { spacing } from '@components/ui/constants'
import { FontAwesome5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from '@ui-kitten/components'

import { useGlobalState } from '../../state'
import { LoadingScreen } from '@components/screens/LoadingScreen'
import { JoinTribeScreen } from '@components/screens/JoinTribeScreen'
import { ContactsScreen } from '@components/screens/ContactsScreen'
import { CreateTribeScreen } from '@components/screens/CreateTribeScreen'

export type RootNavigatorParamList = {
  Loading: undefined
  Login: undefined
  JoinTribe: undefined
  CreateTribe: undefined
  Root: undefined
  CompleteChallenge: { assignmentId: string }
  TakePhoto: { assignmentId: string }
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
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Challenges" component={ChallengeNavigator} />
      <Tab.Screen name="Settings" component={View} />
    </Tab.Navigator>
  )
}

export const RootNavigator: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useGlobalState('userId')
  const [token, setToken] = useGlobalState('token')

  if ((userId || !token) && loading) {
    setLoading(false)
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login" headerMode="none">
        <RootStack.Screen name="Loading" component={LoadingScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="JoinTribe" component={JoinTribeScreen} />
        <RootStack.Screen name="CreateTribe" component={CreateTribeScreen} />
        <RootStack.Screen name="Root" component={TabNavigator} />
        {/* NOTE: Showing screens above tabs this way. Maybe there is better way in react-navigationn5 but don't have time to find out. */}
        <RootStack.Screen name="CompleteChallenge" component={CompleteChallengeScreen} />
        <RootStack.Screen name="TakePhoto" component={TakePhotoScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
