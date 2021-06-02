import React from 'react';
import {StatusBar, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import tabNav from './tabNav';

import AdmEventScreen from '../Screens/AdmEventScreen';
import Dashboard from '../Screens/Dashboard';
import SignIn from '../Screens/SignIn';
import EventPayment from '../Screens/EventPayment';
import AdmEventScreen from '../Screens/AdmEventScreen';
import AboutEvent from '../Screens/AboutEvent';



const Stack = createStackNavigator();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AboutEvent" component={AboutEvent} />
      <Stack.Screen name="AdmScreen" component={AdmEventScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
