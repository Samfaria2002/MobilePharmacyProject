import { styles } from "./style";
import React, { useState } from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
// import pharmacies from "../../data/pharmacie"
import { IconButton } from 'react-native-paper';
import { ListItem } from '@rneui/base';
import { useNavigation } from '@react-navigation/native'


// pharmacies
export default function Pharmacies({ route }) {

    const response = route.params;
    var pharmacies = response.pharmacies;
    

    const navigation = useNavigation();
    const [pharmacieID, setPharmacieID] = useState(null)

    function abrirDetalhe(pharmacie) {
        setPharmacieID(pharmacie.pharmacyId)
        navigation.navigate('Medicines', { pharmacie: pharmacie })
    }

    function getPharmacie({ item: pharmacie }) {
        return (
            <View style={styles.item}>
                <ListItem key={pharmacie.pharmacyId} bottomDivider>
                    <IconButton
                        icon="hospital-marker"
                        size={40}
                        color='#7bb7e0'
                        onPress={() => abrirDetalhe(pharmacie)}
                    />
                    <ListItem.Content>
                        <ListItem.Title>{pharmacie.name}</ListItem.Title>
                        <ListItem.Subtitle>{pharmacie.rua}</ListItem.Subtitle>
                        <Text
                            style={styles.textInformacao}
                            onPress={() => abrirDetalhe(pharmacie)}
                        >
                            Mais informações
                        </Text>
                    </ListItem.Content>
                </ListItem>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewPharmacies}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>Farmácias Proximas</Text>
                </View>
                <FlatList
                    data={pharmacies}
                    keyExtractor={(pharmacie) => pharmacie.pharmacyId.toString()}
                    renderItem={getPharmacie}
                />
            </View>
        </View>
    );
}