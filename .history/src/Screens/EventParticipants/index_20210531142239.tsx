import React from 'react';
import {StatusBar, View, StyleSheet, ScrollView} from 'react-native';

import {
  Container,
  Header,
  NavButton,
  UserStatus,
  UsersList,
  UserRow,
} from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScreenMainText, Small, BoldMedium} from '../../components/Text';
import {HorizontalLine} from '../../components/Line';

interface Props {
  openModal: () => void;
  closeModal: () => void;
}

const EventParticipants: React.FC<Props> = ({closeModal}: Props) => {
  return (
    <Container>
      <StatusBar
        // barStyle="light-content"
        // 'light-content'
        hidden={false}
        translucent={true}
        backgroundColor="#8C52FF"
      />
      <Header>
        <View style={styles.iconContainer}>
          <Entypo name="users" color="#f0f2f5" size={20} />
        </View>
        <ScreenMainText style={{color: '#ced0da'}}>
          Usuarios cadastrados em palestra motivacional
        </ScreenMainText>
        {/* <Small>Lista</Small> */}
      </Header>
      <HorizontalLine />
      <UsersList>
        <ScrollView horizontal={false}>
          <UserRow>
            <UserStatus />
            <Small style={{color: '#ced0da'}}>Diego</Small>
          </UserRow>
          <UserRow>
            <UserStatus />
            <Small style={{color: '#ced0da'}}>Raphael</Small>
          </UserRow>
          <UserRow>
            <UserStatus />
            <Small style={{color: '#ced0da', fontSize: 15, lineHeight: 16}}>
              Carlos
            </Small>
          </UserRow>
          <UserRow>
            <UserStatus style={{backgroundColor: '#db1154'}} />
            <Small style={{color: '#ced0da'}}>Nagib</Small>
          </UserRow>
          <UserRow>
            <UserStatus />
            <Small style={{color: '#ced0da'}}>Carlos</Small>
          </UserRow>
          <UserRow>
            <UserStatus />
            <Small style={{color: '#ced0da'}}>Carlos</Small>
          </UserRow>
          <UserRow>
            <UserStatus />
            <Small style={{color: '#ced0da'}}>Carlos</Small>
          </UserRow>
          <UserRow>
            <UserStatus />
            <Small style={{color: '#ced0da'}}>Carlos</Small>
          </UserRow>
          <UserRow>
            <UserStatus />
            <Small style={{color: '#ced0da'}}>Carlos</Small>
          </UserRow>
          <UserRow>
            <UserStatus />
            <Small style={{color: '#ced0da'}}>Carlos</Small>
          </UserRow>
        </ScrollView>
      </UsersList>
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
    backgroundColor: 'rgba(147, 150, 158, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    borderWidth: 2,
    borderColor: '#e6e6e6',
  },
});
export default EventParticipants;
