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
import React from 'react';

import {Searchbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';
const CustomSearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.container}
      inputStyle={styles.input}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e2630',
    borderWidth: 1,
    borderColor: '#a9a4b2',
    borderRadius: 8,
    marginTop: 45,
    color: '#a9a4b2',
  },
  input: {
    color: '#a9a4b2',
  },
});
export default CustomSearchBar;
