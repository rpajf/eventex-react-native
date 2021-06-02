import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Dashboard from '../Screens/Dashboard';
import SignIn from '../Screens/SignIn';
import EventInfo from '../Screens/EventInfo';
import AdmEventScreen from '../Screens/AdmScreen'

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
          backgroundColor: '#2b3647',
          // '#1e2630'
          // '#2a2e5b',
          height: 40,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <MaterialIcon name="dashboard" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Signin"
        component={SignIn}
        options={{
          tabBarLabel: 'Signin',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="sign-in" color={color} size={15} />
          ),
        }}
      />
      <Tab.Screen
        name="Eventinfo"
        component={EventInfo}
        options={{
          tabBarLabel: 'Eventinfo',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="sign-in" color={color} size={15} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default Tabs;
