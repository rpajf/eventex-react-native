import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import theme from './global/styles/theme';
import {ThemeProvider} from 'styled-components';

import Home from './Screens/Home';
import tabNav from './routes/tabNav';
import stackNav from './routes/stackNav';

const Stack = createStackNavigator();

const App:() => ReactNod{
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#8C52FF"
        translucent={true}
      />
      <NavigationContainer>
        {/* <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <stackNav />
        {/* <Stack.Screen name="StackNavigator" component={stackNav} /> */}
        <Stack.Screen name="TabNavigator" component={tabNav} />
        {/* <Stack.Screen name="AboutEvent" component={AboutEvent} /> */}
        {/* </Stack.Navigator> */}
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
