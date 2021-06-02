import React from 'react';
import {StatusBar, StyleSheet, KeyboardAvoidingView} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../types';
import {BottomNavigatorParamsList} from '../types';
import {RootNavigatorParamsList} from '../types';

import StackNav from './stackNav';
import tabNav from './tabNav';

import AdmEventScreen from '../Screens/AdmEventScreen';
import CreateEvent from '../Screens/CreateEvent';
import EventPayment from '../Screens/EventPayment';
import Home from '../Screens/Home';

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
      <Screen name="CreateEvent" component={CreateEvent} />
      <Screen name="EventPayment" component={EventPayment} />
      <Screen name="AdmEvent" component={AdmEventScreen} />
    </Navigator>
  );
};

export default RootStack;
