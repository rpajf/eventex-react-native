import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
          <Tab.Screen
            name="Home"
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
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
