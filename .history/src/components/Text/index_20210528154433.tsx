import React from 'react';
import {TextProps} from 'react-native';

import {WarnText, BoldText, BoldMediumText, } from './styles';
interface RequiredFieldProps extends TextProps {
  children: string;
}

export const RequiredField: React.FC<RequiredFieldProps> = ({
  children,
  ...rest
}: RequiredFieldProps) => {
  return <WarnText {...rest}>{children}</WarnText>;
};

export const ScreenMainText: React.FC<RequiredFieldProps> = ({
  children,
  ...rest
}: RequiredFieldProps) => {
  return <BoldText {...rest}>{children}</BoldText>;
};
