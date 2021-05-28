import React from 'react';
import {Text} from 'react-native';

import {Container, HomeImage} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <HomeImage source={require('../../assets/')}>
      <Text>asada</Text>
    </Container>
  );
};

export default Home;
