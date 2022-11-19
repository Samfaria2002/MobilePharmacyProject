import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { styles } from "./style";
import { useNavigation } from '@react-navigation/native'

const Search = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    const onIconPress = () => {
        if (searchQuery != '') {
            navigation.navigate('Pharmacies')
        } else {
            alert("Informe um remédio!")

        }
    }

    return (
        <Searchbar
            style={styles.searchInput}
            placeholder="Search"
            onChangeText={onChangeSearch}
            onIconPress={onIconPress}
            value={searchQuery}
        />
    );
};

export default Search;
