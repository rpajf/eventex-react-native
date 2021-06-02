import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import Dashboard from '../Screens/Dashboard';
import SignIn from '../Screens/SignIn';
import EventPayment from '../Screens/EventPayment';
import AdmEventScreen from '../Screens/AdmEventScreen';
import EventInfo from '../Screens/EventInfo';

import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        // activeTintColor: 'rgba(244,244,255,0.95)',
        activeTintColor: '#c6c1cc',

        inactiveTintColor: '#8e8d92',
        style: {
          position: 'absolute',
          bottom: 10,
          left: 20,

          // backgroundColor: '#4d3c72',
          // backgroundColor: '#2b3647',
          backgroundColor: '#fff',
          // backgroundColor: '#A5A6F6',
          right: 20,
          elevation: 0,
          borderRadius: 25,
          paddingBottom: 10,
          paddingTop: 5,
          borderTopWidth: 0,
          // backgroundColor: '#9f81cd',
          // backgroundColor: '#8C52FF',
          // backgroundColor: '#2b3647',
          // '#302744'
          // '#1e2630'
          // '#2a2e5b',
          //'#6200ee'
          //'#2b3647'
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <MaterialIcon
              name="dashboard"
              color={color}
              size={20}
              style={styles.buttonShadow}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Signin"
        component={SignIn}
        options={{
          tabBarLabel: 'Signin',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="sign-in" color={color} size={20} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="EventPayment"
        component={EventPayment}
        options={{
          tabBarLabel: 'EventPayment',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="sign-in" color={color} size={15} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="AdmScreen"
        component={AdmEventScreen}
        options={{
          tabBarLabel: 'EventAdmin',
          tabBarIcon: ({color}) => (
            <MaterialIcon name="admin-panel-settings" color={color} size={15} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="EventInfo"
        component={EventInfo}
        // options={{
        //   tabBarLabel: 'EventInfo',
        //   tabBarIcon: ({color}) => (
        //     <MaterialCommunityIcons
        //       name="information-outline"
        //       color={color}
        //       size={20}
        //     />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  buttonShadow: {
    // ...Platform.select({
    //   ios: {
    //     shadowColor: '#ffff',
    //     shadowRadius: 2,
    //     shadowOffset: {width: 2, height: 2},
    //     shadowOpacity: 0.16,
    //   },
    //   android: {
    //     elevation: 19,
    //   },
    // }),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
});

export default Tabs;
