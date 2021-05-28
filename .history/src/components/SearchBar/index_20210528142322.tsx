import React from 'react';

import {Dimensions, Animated} from 'react-native';
import {Container, Input, BoxButtonSearch, SearchIcon} from './styles';
import {SearchBar} from 'react-native-elements';

// export default function SearchBar() {
//   const animation = new Animated.Value(60);
//   const {width} = Dimensions.get('window');

//   function onSearch() {
//     Animated.spring(animation, {
//       toValue: width * 1.5,
//       useNativeDriver: false,
//     }).start();
//   }

//   return (
//     <Container style={{width: animation}}>
//       <Input autoFocus />
//       <BoxButtonSearch onPress={onSearch}>
//         <SearchIcon />
//       </BoxButtonSearch>
//     </Container>
//   );
// }
import {Searchbar} from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default MyComponent;
