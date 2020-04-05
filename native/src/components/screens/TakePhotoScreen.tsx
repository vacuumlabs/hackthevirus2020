import { Camera } from 'expo-camera'
import React, { useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'

import { RootNavigatorParamList } from '@components/navigation/RootNavigator'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import { Button } from '@ui-kitten/components'

import { useAddAttachmentMutation } from '../../../graphqlSdk'

type Props = {
  route: RouteProp<RootNavigatorParamList, 'TakePhoto'>
  navigation: NavigationProp<RootNavigatorParamList, 'TakePhoto'>
}

export const TakePhotoScreen: React.FC<Props> = ({ route, navigation }) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [addAttachment] = useAddAttachmentMutation()

  useEffect(() => {
    Camera.requestPermissionsAsync().then(({ status }) => setHasPermission(status === 'granted'))
  }, [])

  const ref = useRef<Camera>(null)

  const flip = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    )
  }

  const snap = async () => {
    if (ref) {
      setLoading(true)
      const result = await ref.current.takePictureAsync({ quality: 0.5, base64: true })
      await addAttachment({
        variables: { assignment_id: route.params.assignmentId, attachment: result.base64 },
        refetchQueries: ['Challenge'],
        awaitRefetchQueries: true,
      })
      setLoading(false)
      navigation.goBack()
    }
  }

  if (!hasPermission) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <View>
            <Button
              status="warning"
              onPress={snap}
              style={{ marginBottom: 10 }}
              disabled={isLoading}
            >
              Take a photo
            </Button>
            <Button
              status="success"
              onPress={flip}
              style={{ marginBottom: 10 }}
              disabled={isLoading}
            >
              Switch camera
            </Button>
          </View>
        </View>
      </Camera>
    </View>
  )
}
