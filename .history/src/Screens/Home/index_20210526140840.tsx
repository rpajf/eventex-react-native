import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';

import {Container, HomeImage} from './styles';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

type ImageResizeMode = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
const Home: React.FC = () => {
  return (
    <Container>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/img/homeLogo.png')}>
        <Text style={styles.text}>Seus Eventos Favoritos Aqui</Text>
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
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '77.5%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: '55%',
    color: '#8250ca',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
