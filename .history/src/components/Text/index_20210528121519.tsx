import React from 'react';
import {TextProps} from 'react-native';

import { WarnText } from './styles';
interface RequiredFieldProps extends TextProps{
  
};


const RequiredField: React.FC = ({...rest}: RequiredFieldProps) => {
  return <WarnText {...rest}/>;
};

export RequiredField;
