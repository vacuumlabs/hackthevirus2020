import { useNavigation } from '@react-navigation/native'
import { Avatar, Card, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const COLORS = {
  orange: '#ffc342',
  lightbrown: '#f5efe3',
  navy: '#0c2945',
  cyan: '#37a2a4',
  white: '#ffffff',
}

const CHALLENGES = [
  {
    name: 'Call a family member',
    color: COLORS.orange,
    people: ['https://i.pravatar.cc/300', 'https://i.pravatar.cc/300', 'https://i.pravatar.cc/300'],
  },
  {
    name: 'Tidy up around you',
    color: COLORS.navy,
    people: ['https://i.pravatar.cc/300', 'https://i.pravatar.cc/300'],
  },
  {
    name: 'Call a family member',
    color: COLORS.cyan,
    people: ['https://i.pravatar.cc/300'],
  },
]

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation()

  const navigate = () => {
    navigation.navigate('Detail')
  }
  return (
    <Layout style={{ flex: 1 }} level="1">
      <Layout level="3">
        <SafeAreaView>
          <Text category="h3" style={{ marginLeft: 16, marginBottom: 16, marginTop: 32 }}>
            Your challenges
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 8 }}
          >
            {CHALLENGES.map((challenge, index) => (
              <View style={{ flexDirection: 'column' }} key={index}>
                <TouchableOpacity>
                  <Card
                    appearance="outline"
                    style={{
                      backgroundColor: challenge.color,
                      marginHorizontal: 8,
                      width: Dimensions.get('window').width / 3,
                      height: Dimensions.get('window').width / 3,
                      borderRadius: 16,
                      justifyContent: 'flex-end',
                      paddingLeft: 0,
                    }}
                  >
                    <Text category="p1" status="control">
                      {challenge.name}
                    </Text>
                  </Card>
                </TouchableOpacity>
                <View
                  style={{
                    marginTop: 16,
                    marginLeft: 32,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  {challenge.people.slice(0, 2).map((avatar, index) => (
                    <Avatar style={{ marginLeft: -16 }} key={index} source={{ uri: avatar }} />
                  ))}
                  {challenge.people.length > 2 && (
                    <Text category="h6" style={{ marginLeft: 8 }}>{`+${challenge.people.length -
                      2}`}</Text>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </Layout>
      <ScrollView>
        <Layout level="1">
          <Text category="h6" style={{ marginLeft: 16, marginBottom: 16, marginTop: 24 }}>
            Find a new challenge
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 8 }}
          >
            {CHALLENGES.map((challenge, index) => (
              <TouchableOpacity key={index}>
                <Card
                  appearance="filled"
                  style={{
                    backgroundColor: COLORS.lightbrown,
                    marginHorizontal: 8,
                    width: Dimensions.get('window').width / 3,
                    height: Dimensions.get('window').width / 3,
                    borderRadius: 16,
                    justifyContent: 'flex-end',
                  }}
                >
                  <Text category="p1">{challenge.name}</Text>
                </Card>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text category="h6" style={{ marginLeft: 16, marginBottom: 16, marginTop: 24 }}>
            See your previous challenges
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 8 }}
          >
            {CHALLENGES.map((challenge, index) => (
              <TouchableOpacity key={index}>
                <Card
                  appearance="filled"
                  style={{
                    backgroundColor: challenge.color,
                    marginHorizontal: 8,
                    width: Dimensions.get('window').width / 3,
                    height: Dimensions.get('window').width / 3,
                    borderRadius: 16,
                    justifyContent: 'flex-end',
                  }}
                >
                  <Text category="p1" status="control">
                    {challenge.name}
                  </Text>
                </Card>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Layout>
      </ScrollView>
    </Layout>
  )
}
