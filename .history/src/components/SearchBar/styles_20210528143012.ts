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
// import styled from 'styled-components/native';
// import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

// import Icon from 'react-native-vector-icons/FontAwesome';

// export const Container = styled(Animated.View)`
//   width: ${RFValue(60)}px;
//   height: ${RFValue(60)}px;
//   margin-top: ${RFPercentage(5)}px;
//   background-color: #362d49;
//   border-radius: ${RFValue(30)}px;
// `;

// export const Input = styled(TextInput)`
//   flex: 1;
//   margin-right: 60px;
//   margin-left: 20px;
//   color: #999;
// `;

// export const BoxButtonSearch = styled.TouchableOpacity`
//   width: ${RFValue(60)}px;
//   height: ${RFValue(60)}px;
//   background-color: #362d49;
//   position: absolute;
//   right: 0px;
//   border-radius: ${RFValue(60)}px;
//   justify-content: center;
//   align-items: center;
// `;
// export const SearchIcon = styled(Icon).attrs({
//   name: 'search',
// })`
//   color: #fff;
//   font-size: 25px;
// `;
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';

import {TextInput, Animated, View} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(Searchbar)`
  width: ${RFValue(130)}px;
  height: ${RFValue(30)}px;
`;
