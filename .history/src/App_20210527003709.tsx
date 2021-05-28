import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {BottomTabBar, createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import theme from './global/styles/theme';
import {ThemeProvider} from 'styled-components';
import Home from './Screens/Home';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#8C52FF"
        translucent={true}
      />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: 'tomato',

            inactiveTintColor: '#fff',
            style: {
              backgroundColor: '#2a2e5b',
            },
          }}>
          <Tab.Screen name="Home" component={Home} options={
            BottomTabBar: 
          }/>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
