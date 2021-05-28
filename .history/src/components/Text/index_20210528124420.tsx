import React from 'react';
import {TextProps} from 'react-native';

import {WarnText, BoldText} from './styles';
interface RequiredFieldProps extends TextProps {
  children: string;
}

export const RequiredField: React.FC<RequiredFieldProps> = ({
  children,
  ...rest
}: RequiredFieldProps) => {
  return <WarnText {...rest}>{children}</WarnText>;
};

export const BoldText: React.FC<RequiredFieldProps> = ({
  children,
  ...rest
}: RequiredFieldProps) => {
  return <WarnText {...rest}>{children}</WarnText>;
};