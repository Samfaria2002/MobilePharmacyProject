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
            fetch('https://spartom.pythonanywhere.com/api/remedy/' + searchQuery, {
                method: 'GET'
            })
            .then(resp => resp.json())
            .then(resp => {
                if(resp != ''){
                    navigation.navigate('Pharmacies', { pharmacies: resp })
                    
                }else{
                    alert("Não econtramos nenhum remedio que condiz com a descrição informada.")
                }
            })
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
            onSubmitEditing={onIconPress}
        />
    );
};

export default Search;
