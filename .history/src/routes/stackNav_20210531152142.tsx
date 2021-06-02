import React from 'react';
import {StatusBar, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Screens/Home';
import tabNav from './tabNav';
import AboutEvent from '../Screens/AboutEvent';

const Stack = createStackNavigator();

// import { Container } from './styles';

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TabNavigator" component={tabNav} />
      <Stack.Screen name="AboutEvent" component={AboutEvent} />
    </Stack.Navigator>
  );
};

export default RootStack;
