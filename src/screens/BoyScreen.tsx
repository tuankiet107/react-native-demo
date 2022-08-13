import * as React from 'react'
import { View } from 'react-native'
import { Button, Header } from 'react-native-elements'
import { Page, Heading } from '../components/index'
import * as Notifications from 'expo-notifications'

const getNotificationToken = async () => {
  const settings = await Notifications.getPermissionsAsync()
  if (settings.status !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync()
    if (status !== 'granted') {
      alert('Failed to get notification token')
      return
    }
  }

  const tokenData = await Notifications.getExpoPushTokenAsync()
  const token = tokenData.data
  console.log({ token })
  return token
}

const BoyScreen: React.FC = () => {
  return (
    <View>
      <Header centerComponent={{ text: 'For boy', style: { color: '#fff' } }} />
      <Page>
        <Heading>Bạn chưa có mã xác nhận</Heading>
        <Button title="Bấm để lấy mã số" onPress={getNotificationToken} />
      </Page>
    </View>
  )
}

export default BoyScreen
