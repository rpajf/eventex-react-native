import * as React from 'react';

import {Dimensions, Animated} from 'react-native';



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
import {Container} from './styles';
const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Container
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default MyComponent;
