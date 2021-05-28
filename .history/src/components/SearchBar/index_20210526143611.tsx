import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInputProps} from 'react-native';
import {Container, TextInput} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  containerStyle?: Record<string, unknown>;
}
const SearchBar: React.FC = ({name, icon, containerStyle = {}, ...rest}) => {
  return (
    <Container>
      <Icon
        name={icon}
        size={20}
        color={isFilled || isFocused ? '#ff9000' : '#666360'}
      />
    </Container>
  );
};

export default SearchBar;
