import 'react-native-gesture-handler';
import React, {ReactNode} from 'react';
import {StatusBar, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import theme from './global/styles/theme';
import {ThemeProvider} from 'styled-components';

import Home from './Screens/Home';
import tabNav from './routes/tabNav';
import StackNav from './routes/StackNav';
import RootStack from './routes/rootStack';

const App: () => ReactNode = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#8C52FF"
          translucent={true}
        />
        {/* <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <RootStack />
        {/* <Stack.Screen name="StackNavigator" component={stackNav} /> */}
        {/* <Stack.Screen name="TabNavigator" component={tabNav} /> */}
        {/* <Stack.Screen name="AboutEvent" component={AboutEvent} /> */}
        {/* </Stack.Navigator> */}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
