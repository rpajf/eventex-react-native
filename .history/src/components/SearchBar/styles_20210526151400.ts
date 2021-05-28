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
import React from 'react';

import {Dimensions, Animated} from 'react-native';
import {Container, Input, BoxButtonSearch, SearchIcon} from './styles';

export default function SearchBar() {
  const animation = new Animated.Value(60);
  const {width} = Dimensions.get('window');

  function onSearch() {
    Animated.spring(animation, {
      toValue: width * 0.7,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Container style={{width: animation}}>
      <Input autoFocus />
      <BoxButtonSearch onPress={onSearch}>
        <SearchIcon />
      </BoxButtonSearch>
    </Container>
  );
}