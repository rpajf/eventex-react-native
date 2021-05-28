import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

const SearchBar: React.FC = () => {
  return <Container>
     <Icon
        name={icon}
        size={20}
        color={isFilled || isFocused ? '#ff9000' : '#666360'}
      />
  </Container>;
};

export default SearchBar;
