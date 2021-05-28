import React from 'react';
import {View} from 'react-native';

import SearchBar from '../../components/SearchBar';

import {Container, NavSection, EventSection} from './styles';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <NavSection>
        <SearchBar />
      </NavSection>
      <EventSection />
    </Container>
  );
};

export default DashBoard;
