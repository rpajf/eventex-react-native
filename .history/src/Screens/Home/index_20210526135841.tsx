import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {Container, HomeImage} from './styles';
type ImageResizeMode = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
const Home: React.FC = () => {
  return (
    <Container>
      <HomeImage styles source={require('../../assets/img/homeLogo.png')}>
        <Text>asada</Text>
      </HomeImage>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});

export default Home;
