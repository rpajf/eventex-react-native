import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';

import {Container, HomeButton, ButtonText, ImageText, HomeImg} from './styles';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Home: React.FC = ({navigation}) => {
  const [dimensions, setDimensions] = useState({window, screen});

  const onChange = ({window, screen}) => {
    setDimensions({window, screen});
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });
  return (
    <Container>
      <HomeImg
        resizeMode="center"
        source={require('../../assets/img/homeLogo.png')}>
        <Text style={styles.text}>Seus Eventos Favoritos Aqui!</Text>
      </HomeImg>
      {/* <Input /> */}
      <HomeButton
        onPress={() =>
          navigation.navigate('TabNavigator', {screen: 'Dashboard'})
        }>
        <ButtonText>Começar</ButtonText>
      </HomeButton>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // height: '75%',

    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: '55%',
    color: '#4a246d',
    fontSize: 22,
    fontFamily: 'Nunito-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
