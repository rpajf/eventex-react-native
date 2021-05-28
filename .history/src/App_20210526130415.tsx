import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from './'
const App: React.FC = () => {
  return (
    <View>
      <Text>asdasda</Text>
    </View>
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
