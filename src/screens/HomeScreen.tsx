import * as React from 'react'

import BoyScreen from './BoyScreen'
import GirlScreen from './GirlScreen'

import { LogBox, Text } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

LogBox.ignoreLogs(['ViewPropTypes will be removed', 'ColorPropType will be removed'])

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Boy Screen"
        component={BoyScreen}
        options={{
          tabBarLabel: 'Boy Screen',
          tabBarIcon: () => <Text>👦</Text>,
        }}
      />
      <Tab.Screen
        name="Girl Screen"
        component={GirlScreen}
        options={{
          tabBarLabel: 'Girl Screen',
          tabBarIcon: () => <Text>👧</Text>,
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeScreen
