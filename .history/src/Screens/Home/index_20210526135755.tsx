import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {Container, HomeImage} from './styles';
type ImageResizeMode = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
const Home: React.FC = () => {
  return (
    <Container>
      <HomeImage source={require('../../assets/img/homeLogo.png')}>
        <Text>asada</Text>
      </HomeImage>
    </Container>
  );
};

export default Home;
