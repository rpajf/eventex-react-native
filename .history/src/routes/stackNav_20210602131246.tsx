import React from 'react';
import {StatusBar, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigatorParamsList} from '../types';
import tabNav from './tabNav';

import AdmEventScreen from '../Screens/AdmEventScreen';
import CreateEvent from '../Screens/CreateEvent';
import EventPayment from '../Screens/EventPayment';
import Home from '../Screens/Home';

const Stack = createStackNavigator<AuthNavigatorParamsList>();

const stackNav: React.FC = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#8C52FF"
        translucent={true}
      />
      <Screen name="CreateEvent" component={CreateEvent} />
      <Screen name="EventPayment" component={EventPayment} />
      <StackScreen name="AdmEvent" component={AdmEventScreen} />
    </Navigator>
  );
};

export default stackNav;
