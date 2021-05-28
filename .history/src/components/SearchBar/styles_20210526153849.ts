// import styled, {css} from 'styled-components/native';
// import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
// import SearchIcon from 'react-native-vector-icons/MaterialIcons';

// interface ContainerProps {
//   isFocused: boolean;
// }
// export const Container = styled.View`
//   width: 80%;
//   height: ${RFPercentage(8)}px;
//   margin-top: ${RFPercentage(-10)}px;
//   border-radius: 10px;
//   border: 2px solid ${({theme}) => theme.colors.lightGray};
//   background-color: ${({theme}) => theme.colors.primary};
//   align-items: center;

//   /* ${props =>
//     props.isFocused &&
//     css`
//       border-color: #ff9000;
//     `} */
// `;
// export const TextInput = styled.TextInput.attrs({
//   placeholderTextColor: '#9999',
// })`
//   font-size: 16px;
//   flex: 1;
//   color: #fff;
//   text-align: center;
// `;

// export const Icon = styled(SearchIcon)`
//   margin-right: 16px;
// `;
import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput, Animated} from 'react-native';

export const Container = styled(Animated.View)`
  /* width: ${RFPercentage(8)}px;
  height: ${RFPercentage(8)}px; */
  width: 60px;
  height: 60px;
  margin-top: ${RFPercentage(-10)}px;

  background-color: ${({theme}) => theme.colors.primary};
  border: 1px solid ${({theme}) => theme.colors.lightGray};
  border-radius: 40px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  margin-right: 60px;
  margin-left: 20px;
  color: #999;
`;

export const BoxButtonSearch = styled.TouchableOpacity`
  /* width: ${RFPercentage(7)}px;
  height: ${RFPercentage(7)}px; */
  width: 60px;
  height: 60px;
  background-color: ${({theme}) => theme.colors.primary};
  position: absolute;
  right: 0px;
  border-radius: 30px;
  /* border-top-left-radius: 10px; */
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(Icon).attrs({
  name: 'search',
})`
  color: #fff;
  font-size: 25px;
`;
