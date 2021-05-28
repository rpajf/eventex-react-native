import React from 'react';
import {Text} from 'react-native';

import {Container, HomeImage} from './styles';

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
