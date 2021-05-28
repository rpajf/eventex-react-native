import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';

import {Container, HomeImage} from './styles';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

type ImageResizeMode = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
const Home: React.FC = () => {
  return (
    <Container>
      <ImageBackground
        style={{
          width: '100%',
          height: ;
        }}
        source={require('../../assets/img/homeLogo.png')}>
        <Text>asada</Text>
      </ImageBackground>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: `${RFPercentage(65)}`,
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
