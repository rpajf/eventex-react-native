import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';

import {Container, Header, NavButton} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScreenMainText, Small} from '../../components/Text';
import {HorizontalLine} from '../../components/Line';

interface Props {
  openModal: () => void;
  closeModal: () => void;
}

const EventParticipants: React.FC<Props> = ({closeModal}: Props) => {
  return (
    <Container>
      <StatusBar
        hidden={false}
        barStyle="light-content"
        translucent={true}
        backgroundColor="#8C52FF"
      />
      <Header>
        <View style={styles.iconContainer}>
          <Entypo
            name="users"
            color="#e6e6e6"
            size={20}
            style={{position: 'absolute'}}
          />
        </View>
        <ScreenMainText style={{color: '#e6e6e6'}}>
          Usuarios cadastrados em:
        </ScreenMainText>
        {/* <Small>Lista</Small> */}
      </Header>
      <HorizontalLine />
      <NavButton onPress={closeModal}>Retornar</NavButton>
    </Container>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    height: 38,
    width: 38,
    position: 'relative',
    display: 'flex',
    backgroundColor: ''
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    borderWidth: 2,
    borderColor: 'rgb(170, 207, 202)',
  },
});
export default EventParticipants;
