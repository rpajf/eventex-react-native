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
      placeholder="Filtrar Eventos"
      onChangeText={onChangeSearch}
      placeholderTextColor="#969cb2"
      value={searchQuery}
      style={styles.container}
      inputStyle={styles.input}
      iconColor="#969cb2"
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
    marginBottom: 10,
  },
  input: {
    color: '#a9a4b2',
  },
});
export default CustomSearchBar;
