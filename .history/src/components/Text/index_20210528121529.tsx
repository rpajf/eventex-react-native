import React from 'react';
import {TextProps} from 'react-native';

import { WarnText } from './styles';
interface RequiredFieldProps extends TextProps{
  children: string
};


const RequiredField: React.FC = ({...rest}: RequiredFieldProps) => {
  return <WarnText {...rest}></WarnText>;
};

export RequiredField;
