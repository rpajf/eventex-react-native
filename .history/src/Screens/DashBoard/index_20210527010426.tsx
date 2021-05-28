import React from 'react';
import {StyleSheet} from 'react-native';

import SearchBar from '../../components/SearchBar';

import {Container, NavSection, EventSection, EventTypes} from './styles';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <NavSection>
        <SearchBar />
        <EventTypes />
      </NavSection>
      <EventSection />
    </Container>
  );
};
const 

export default DashBoard;
