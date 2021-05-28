import React from 'react';
import {TextProps} from 'react-native';

import { WarnText } from './styles';
type RequiredFieldProps = TextProps;


const RequiredField: React.FC = ({...rest}: RequiredFieldProps) => {
  return <WarnText {}/>;
};

export Text;
