import React from 'react';
import {View} from 'react-native';

import SearchBar from '../../components/SearchBar';

import {Container, NavSection} from './styles';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <NavSection></NavSection>
      <SearchBar />
    </Container>
  );
};

export default DashBoard;
