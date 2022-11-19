import { styles } from "./style";
import React, { useState } from "react"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import users from "../../data/user"
import { IconButton } from 'react-native-paper';
import { ListItem, Avatar } from '@rneui/base';
// import users from "../../data/user"
// import DetalheContato from "../detalheContato"
export default function Pharmacies() {

    const [mostrarDetalhe, setMostrarDetalhe] = useState(false)
    const [userID, setUserID] = useState(null)

    function abrirDetalhe(user) {
        setUserID(user.id)
        setMostrarDetalhe(true)
    }

    function abrirLista() {
        setUserID(null)
        setMostrarDetalhe(false)
    }

    function getPharmacie({ item: user }) {
        return (
            
            <View style={styles.item}>
                <ListItem key={user.id} bottomDivider>
                    <IconButton
                        icon="hospital-marker"
                        size={40}
                        color='#7bb7e0'
                    />
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.endereco}</ListItem.Subtitle>
                        <Text
                            style={styles.textInformacao}
                            onPress={() => abrirDetalhe(user)}
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
            {mostrarDetalhe === true ? (
                // se for verdadeiro
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => abrirLista()}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                // se for false
                <View style={styles.viewPharmacies}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.title}>Farmácias Proximas</Text>
                    </View>
                    <FlatList
                        data={users}
                        keyExtractor={(user) => user.id.toString()}
                        renderItem={getPharmacie}
                    />
                </View>
            )}
        </View>
    );
}