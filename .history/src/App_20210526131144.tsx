import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import theme from './global/styles/theme';
import {ThemeProvider} from 'styled-components';

const MainStack = createStackNavigator();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>

      <NavigationContainer>
        <MainStack.Navigator></MainStack.Navigator>
      <View>
        <Text>asdasda</Text>
      </View>
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
