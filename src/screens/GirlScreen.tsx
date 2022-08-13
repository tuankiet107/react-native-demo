import * as React from 'react'
import { View } from 'react-native'
import { Button, Header, Input } from 'react-native-elements'
import { Page, ButtonContainer, SummonButton, SummonButtonText } from '../components/index'
import { sendPushNotification } from '../services/api'

const token = 'your_expo_token'

const GirlScreen: React.FC = () => {
  return (
    <View>
      <Header centerComponent={{ text: 'For girl', style: { color: '#fff' } }} />
      <Page>
        {/* <View>
          <Input label="Mã số 👦" placeholder="Nhập mã số bạn nam" />
          <Button title="Xác nhận mã số" />
        </View> */}

        <View style={{ marginTop: 20 }}>
          <ButtonContainer>
            <SummonButton color="#db5c5c">
              <SummonButtonText
                onPress={() => sendPushNotification(token, '🍔 Đi ăn', 'Qua chở bé đi ăn')}>
                🍔 Đi ăn
              </SummonButtonText>
            </SummonButton>
            <SummonButton color="#4bb149">
              <SummonButtonText
                onPress={() =>
                  sendPushNotification(
                    token,
                    '🍹 Thèm trà sữa',
                    'Bé muốn uống Phúc Long, Highlands'
                  )
                }>
                🍹 Uống trà sữa
              </SummonButtonText>
            </SummonButton>
            <SummonButton color="#d3e15b">
              <SummonButtonText
                onPress={() => sendPushNotification(token, '🛒 Đi shopping', 'Đi shopping với bé')}>
                🛒 Đi shopping
              </SummonButtonText>
            </SummonButton>
            <SummonButton color="#5b9de1">
              <SummonButtonText
                onPress={() =>
                  sendPushNotification(token, '🤙 Call video', 'Nhớ anh iu của bé quá ahihi')
                }>
                🤙 Call video
              </SummonButtonText>
            </SummonButton>
          </ButtonContainer>
        </View>
      </Page>
    </View>
  )
}

export default GirlScreen
