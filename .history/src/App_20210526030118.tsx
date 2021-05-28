import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components';

import theme from './global/styles/theme';
import Dashboard from './screens/DashBoard';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    // <ThemeProvider theme={theme}>
    //   <StatusBar
    //     barStyle="light-content"
    //     hidden={false}
    //     backgroundColor="#2A2E5B"
    //     translucent={true}
    //   />
    // </ThemeProvider>
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
