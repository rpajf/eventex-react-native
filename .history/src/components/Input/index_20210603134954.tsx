import React from 'react';
import {TextInputProps} from 'react-native';
import {Container} from './styles';

type InputProps = TextInputProps;

const Input = ({...rest}: InputProps) => {
  return <Container {...rest}  placeholder/>;
};
export default Input;
