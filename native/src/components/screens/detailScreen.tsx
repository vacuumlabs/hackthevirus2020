import React from 'react'

import { Button, Layout, Text } from '@ui-kitten/components'

export const DetailScreen: React.FC = () => {
  return (
    <Layout>
      <Text>Test push</Text>
      <Button size="small" children="Huaaaaaaa!" status="primary" onPress={() => null} />
    </Layout>
  )
}
