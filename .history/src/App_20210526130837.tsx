import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import theme from './global/styles/theme';
import {ThemeProvider} from 'styled-components';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>asdasda</Text>
      </View>
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
