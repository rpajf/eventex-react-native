import React from 'react';
import {StatusBar, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigatorParamsList} from '../types';
import tabNav from './tabNav';

import AdmEventScreen from '../Screens/AdmEventScreen';
import CreateEvent from '../Screens/CreateEvent';
import EventPayment from '../Screens/EventPayment';
import Home from 

const Stack = createStackNavigator<AuthNavigatorParamsList>();

const stackNav: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#8C52FF"
        translucent={true}
      />
      <Stack.Screen name="CreateEvent" component={CreateEvent} />
      <Stack.Screen name="EventPayment" component={EventPayment} />
      <Stack.Screen name="AdmEvent" component={AdmEventScreen} />
    </Stack.Navigator>
  );
};

export default stackNav;
