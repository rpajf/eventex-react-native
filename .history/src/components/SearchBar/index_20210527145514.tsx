// import React from 'react';

// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {TextInputProps} from 'react-native';
// import {Container, TextInput} from './styles';

// interface InputProps extends TextInputProps {
//   name: string;
//   icon: string;
//   containerStyle?: Record<string, unknown>;
// }
// const SearchBar: React.FC<InputProps> = ({name, icon, ...rest}) => {
//   return (
//     <Container>
//       <Icon name="search" size={20} color="#fff" />
//       <TextInput placeholderTextColor="#666360" {...rest} />
//     </Container>
//   );
// };
import React from 'react';

import {Dimensions, Animated} from 'react-native';
import {Container, Input, BoxButtonSearch, SearchIcon} from './styles';

export default function SearchBar() {
  const animation = new Animated.Value(60);
  const {width} = Dimensions.get('window');

  function onSearch() {
    Animated.spring(animation, {
      toValue: width * 7,
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
