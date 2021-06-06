import React from 'react';
import {TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../../types';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  ImageHeader,
  EventTitle,
  ImageWrapper,
  Main,
  CreateEventInput,
  FieldWrapper,
  InputName,
  SaveEventData,
} from './styles';

export interface CreateEvent {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'CreateEvent'>;
}

const CreateEvent: React.FC<CreateEvent> = ({navigation}) => {
  return (
    <Container>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{alignSelf: 'flex-start'}}>
        <MaterialCommunity name="arrow-left-bold" size={25} color="#b5bbd4" />
      </TouchableOpacity>
      <ImageWrapper />
      <Main>
        <FieldWrapper>
          <InputName>Titulo</InputName>
          <CreateEventInput />
        </FieldWrapper>
        <FieldWrapper>
          <InputName>Data</InputName>
          <CreateEventInput />
        </FieldWrapper>
        <FieldWrapper>
          <InputName>Descrição</InputName>
          <CreateEventInput />
        </FieldWrapper>
        <SaveEventData>Salvar Evento</SaveEventData>
      </Main>
    </Container>
  );
};

export default CreateEvent;
