import React from 'react';
import {StatusBar, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigatorParamsList} from '../types';
import tabNav from './tabNav';

import AdmEventScreen from '../Screens/AdmEventScreen';
import CreateEvent from '../Screens/CreateEvent';
import EventPayment from '../Screens/EventPayment';

import TabNav from './TabNav';
import Profile from '../Screens/Profile';
import EventInfo from '../Screens/EventInfo';

const Stack = createStackNavigator<AuthNavigatorParamsList>();

const StackNav: React.FC = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#8C52FF"
        translucent={true}
      /> */}

      <Screen name="TabNavigator" component={TabNav} />
      <Screen name="EventInfo" component={EventInfo} />
      <Screen name="EventInfo" component={EventInfo} />

      <Screen name="EventPayment" component={EventPayment} />
      <Screen name="AdmEvent" component={AdmEventScreen} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default StackNav;
