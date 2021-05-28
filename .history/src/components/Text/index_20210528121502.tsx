import React from 'react';
import {TextProps} from 'react-native';

import { WarnText } from './styles';
interRequiredFieldProps = TextProps;


const RequiredField: React.FC = ({...rest}: RequiredFieldProps) => {
  return <WarnText {...rest}/>;
};

export RequiredField;
