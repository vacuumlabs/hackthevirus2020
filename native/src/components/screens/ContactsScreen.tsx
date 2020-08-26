import React, { useCallback } from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { Button, Text, Layout, List, ListItem, Avatar } from '@ui-kitten/components'
import { useMyTeamQuery } from '../../../graphqlSdk'
import { LoadingScreen } from './LoadingScreen'
import { useNavigation, useTheme } from '@react-navigation/native'
import { spacing } from '@components/ui/constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'

// TODO: improve UI
const Contact = ({ user }) => {
  return (
    <View key={user.id}>
      <Image
        style={{
          height: 100,
          width: 100,
          borderRadius: 12,
        }}
        source={{ uri: user.avatar }}
      ></Image>
      <Text>{user.name}</Text>
    </View>
  )
}

export const ContactsScreen = () => {
  const { data, loading } = useMyTeamQuery()

  const navigation = useNavigation()

  const onJoin = useCallback(() => {
    navigation.navigate('JoinTribe', { onboarding: false })
  }, [navigation])

  const onCreateNew = useCallback(() => {
    navigation.navigate('CreateTribe', { onboarding: false })
  }, [navigation])

  const theme = useTheme()

  if (loading) {
    return <LoadingScreen />
  }

  // TODO: restyle this branch
  if (data.member.length === 0) {
    return (
      <View>
        <Text>You are not a member of any tribe. Join or create one.</Text>
        <Button style={styles.button} onPress={onJoin}>
          Log into a Tribe
        </Button>
        <Button style={styles.button} onPress={onCreateNew}>
          Create a new Tribe
        </Button>
      </View>
    )
  }

  const users = data.member[0].team.members.map(({ user }) => user)

  const renderItem = ({ item }) => (
    <ListItem
      title={props => (
        <Text {...props} style={[props.style, { fontSize: 18 }]}>
          {item.name}
        </Text>
      )}
      accessoryLeft={() => <Avatar source={{ uri: item.avatar }} />}
    />
  )

  return (
    <Layout style={{ flex: 1 }} level="1">
      <Layout level="3">
        <Text
          category="h3"
          style={{
            fontFamily: 'AbrilFatface-Regular',
            marginLeft: spacing[4],
            marginBottom: spacing[4],
            marginTop: spacing[6],
          }}
        >
          Your Bear Tribe
        </Text>
        <List data={users} renderItem={renderItem}></List>
      </Layout>
      <Layout level="1">
        <Text
          category="h5"
          style={{
            fontFamily: 'OpenSans-Bold',
            marginLeft: spacing[4],
            marginBottom: spacing[4],
            marginTop: spacing[5],
          }}
        >
          Invite people to your Tribe
        </Text>
        <Text
          style={{
            fontFamily: 'OpenSans-Bold',
            marginLeft: spacing[4],
            marginBottom: spacing[4],
            marginTop: spacing[3],
          }}
        >
          Share URL:
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              flex: 1,
              marginLeft: spacing[4],
              marginBottom: spacing[4],
              marginTop: spacing[0],
            }}
          >
            url
          </Text>
          <MaterialCommunityIcons
            style={{ flex: 0, alignSelf: 'flex-end' }}
            name="content-copy"
            size={20}
            color={theme['color-primary-500']}
          />
        </View>
      </Layout>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
  button: {
    marginTop: 20,
  },
})
