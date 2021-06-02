import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {BottomNavigatorParamsList} from '../types';

import Dashboard from '../Screens/Dashboard';
import SignIn from '../Screens/SignIn';
import EventPayment from '../Screens/EventPayment';
import AdmEventScreen from '../Screens/AdmEventScreen';
import EventInfo from '../Screens/EventInfo';
import stackNav from './stackNav';

import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

const Tab = createBottomTabNavigator<BottomNavigatorParamsList>();

const Tabs = () => {
  const {Navigator, Screen} = Tab;
  return (
    <Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        // activeTintColor: 'rgba(244,244,255,0.95)',
        activeTintColor: '#e5daf5',
        keyboardHidesTabBar: true,
        inactiveTintColor: '#8e8d92c8',
        style: {
          // position: 'absolute',
          // bottom: 2,
          // left: 20,
          // right: 20,
          // elevation: 0,
          // borderRadius: 25,
          // paddingBottom: 10,
          // paddingTop: 5,
          borderTopWidth: 0,
          height: 50,
          paddingBottom: 5,
          backgroundColor: '#3c425f',
          // backgroundColor: '#9f81cd',
          // '#302744'
          // '#1e2630'
          // backgroundColor: '#4d3c72',
          // backgroundColor: '#2b3647',
          // backgroundColor: '#fff',
          // backgroundColor: '#A5A6F6',
          // backgroundColor: '#8C52FF',
        },
      }}>
      <Screen
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
      <Screen
        name="Signin"
        // children={<CreateEvent label="CreateEvent" navigation />}
        component={SignIn}
        options={{
          tabBarLabel: 'Signin',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="sign-in" color={color} size={20} />
          ),
        }}
      />
      {/* <Screen
        name="EventPayment"
        component={EventPayment}
        options={{
          tabBarLabel: 'EventPayment',
          tabBarIcon: ({color}) => (
            <FontAwesomeIcon name="sign-in" color={color} size={15} />
          ),
        }}
      /> */}
      {/* <Screen
        name="AdmScreen"
        component={AdmEventScreen}
        options={{
          tabBarLabel: 'EventAdmin',
          tabBarIcon: ({color}) => (
            <MaterialIcon name="admin-panel-settings" color={color} size={15} />
          ),
        }}
      /> */}
      <Screen
        name="EventInfo"
        component={EventInfo}
        // options={{tabBarVisible: false}}
        options={{
          tabBarVisible: false,

          tabBarLabel: 'EventInfo',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="information-outline"
              color={color}
              size={20}
            />
          ),
        }}
      />
    </Navigator>
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
