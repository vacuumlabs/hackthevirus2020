import { RootNavigatorParamList } from '@components/navigation/RootNavigator'
import { RouteProp } from '@react-navigation/native'
import { Camera } from 'expo-camera'
import React, { useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useAddAttachmentMutation } from '../../../graphqlSdk'

type Props = {
  route: RouteProp<RootNavigatorParamList, 'TakePhoto'>
}

export const TakePhotoScreen: React.FC<Props> = ({ route }) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)
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
      const result = await ref.current.takePictureAsync({ quality: 0.5, base64: true })
      addAttachment({ variables: { assignment_id: route.params.id, attachment: result.base64 } })
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
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={flip}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={snap}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}
