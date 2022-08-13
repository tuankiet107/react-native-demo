import styled from 'styled-components'
import { View, Text, TouchableOpacity } from 'react-native'

export const Page = styled(View)`
  padding: 40px 30px 0 30px;
`

export const Heading = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`

export const ButtonContainer = styled(View)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const SummonButton = styled(TouchableOpacity)<{ color?: string }>`
  background-color: ${p => p.color || '#db5c5c'};
  flex: 48% 0 0;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SummonButtonText = styled(Text)`
  color: #fff;
  font-size: 18px;
`
