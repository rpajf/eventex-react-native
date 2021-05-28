import React from 'react';
import {View} from 'react-native';

import SearchBar from '../../components/SearchBar';

import {Container} from './styles';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
};

export default DashBoard;
