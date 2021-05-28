import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '../Screens/Dashboard';
import SignIn from '../Screens/SignIn';

import {View, Text, TouchableOpacity} from 'react-native';
// view-dashboard

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: 'tomato',

        inactiveTintColor: '#fff',
        style: {
          backgroundColor: '#2a2e5b',
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Icon name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          tabBarLabel: 'SignIn',
          tabBarIcon: ({color, size}) => (
            <Icon name="profile" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
