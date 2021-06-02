import React from 'react';

import {ContainerVertical, ContainerHorizontal} from './styles';

// interface LineProps {
//   props: CssProps;
// }

export const VerticalLine: React.FC = () => {
  return <ContainerVertical />;
};
export const HorizontalLine: React.FC = ({...rest}) => {
  return <ContainerHorizontal {...rest} />;
};
