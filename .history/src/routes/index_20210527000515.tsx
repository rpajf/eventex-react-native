import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DashBoard from '../screens/DashBoard';
import Contact from '../screens/Contact';


import {View, Text, TouchableOpacity} from 'react-native';
// view-dashboard

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',

        inactiveTintColor: '#fff',
        style: {
          backgroundColor: '#2a2e5b',
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashBoard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Icon name="dashboard" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
};

export default Tabs;
