import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';

import Input from '../../components/SearchBar'
import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/img/homeLogo.png')}>
        <Text style={styles.text}>Seus Eventos Favoritos Aqui!</Text>
      </ImageBackground>
      <Input/>
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
    color: '#4a246d',
    fontSize: 24,
    fontFamily: 'Nunito-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
