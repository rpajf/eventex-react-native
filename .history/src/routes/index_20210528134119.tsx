import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FtawsomeIcon from 'react-native-vector-icons/FontAwesome5';

import Dashboard from '../Screens/Dashboard';
import SignIn from '../Screens/SignIn';
import EventInfo from '../Screens/EventInfo';

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
        name="Signin"
        component={SignIn}
        options={{
          tabBarLabel: 'Signin',
          tabBarIcon: ({color, size}) => (
            <FtawsomeIcon name="sign-in" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Eventinfo"
        component={EventInfo}
        options={{
          tabBarLabel: 'Eventinfo',
          tabBarIcon: ({color, size}) => (
            <FtawsomeIcon name="sign-in" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
