
import React from 'react';

import {Dimensions, Animated} from 'react-native';
import {Container, Input, BoxButtonSearch, SearchIcon} from './styles';

export default function SearchBar() {
  const animation = new Animated.Value(60);
  const {width} = Dimensions.get('window');

  function onSearch() {
    Animated.spring(animation, {
      toValue: width * 1,
      useNativeDriver: false,
    }).start();
  }

  return (
    // <Container style={{width: animation}}>
    <Container>
      <Input autoFocus />
      <BoxButtonSearch onPress={onSearch}>
      </BoxButtonSearch>
      <SearchIcon />
    </Container>
  );
}
