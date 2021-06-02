import React from 'react';
import {StatusBar, StyleSheet, KeyboardAvoidingView} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../types';
import {BottomNavigatorParamsList} from '../types';
import {RootNavigatorParamsList} from '../types';

import StackNav from './StackNav';

import AdmEventScreen from '../Screens/AdmEventScreen';

import EventPayment from '../Screens/EventPayment';
import Home from '../Screens/Home';
import TabNav from './TabNav';
import StackNav from './'


const Stack = createStackNavigator<RootNavigatorParamsList>();

const RootStack: React.FC = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#8C52FF"
        translucent={true}
      /> */}
      <Screen name="Home" component={Home} />
      <Screen name="TabNavigator" component={TabNav} />
      <Screen name="EventPayment" component={EventPayment} />
      <Screen name="AdmEvent" component={AdmEventScreen} />
    </Navigator>
  );
};

export default RootStack;
