import React from 'react';
import {StatusBar, StyleSheet, KeyboardAvoidingView, StatusB} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import tabNav from './tabNav';

import AdmEventScreen from '../Screens/AdmEventScreen';
import CreateEvent from '../Screens/CreateEvent';
import EventPayment from '../Screens/EventPayment';

const Stack = createStackNavigator();

const RootStack: React.FC = () => {
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
      <Stack.Screen name="CreateEventScreen" component={CreateEvent} />
      <Stack.Screen name="EventPaymentScreen" component={EventPayment} />
      <Stack.Screen name="AdmEventScreen" component={AdmEventScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
