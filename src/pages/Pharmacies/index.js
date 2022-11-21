import { styles } from "./style";
import React, { useState } from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import pharmacies from "../../data/pharmacie"
import { IconButton } from 'react-native-paper';
import { ListItem } from '@rneui/base';
import { useNavigation } from '@react-navigation/native'

export default function Pharmacies() {
    const navigation = useNavigation();
    const [pharmacieID, setPharmacieID] = useState(null)

    function abrirDetalhe(pharmacie) {
        setPharmacieID(pharmacie.id)
        navigation.navigate('Medicines', { pharmacieID: pharmacie.id })
    }

    function getPharmacie({ item: pharmacie }) {
        return (
            <View style={styles.item}>
                <ListItem key={pharmacie.id} bottomDivider>
                    <IconButton
                        icon="hospital-marker"
                        size={40}
                        color='#7bb7e0'
                        onPress={() => abrirDetalhe(pharmacie)}
                    />
                    <ListItem.Content>
                        <ListItem.Title>{pharmacie.name}</ListItem.Title>
                        <ListItem.Subtitle>{pharmacie.endereco}</ListItem.Subtitle>
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
                    keyExtractor={(pharmacie) => pharmacie.id.toString()}
                    renderItem={getPharmacie}
                />
            </View>
        </View>
    );
}