import React, { useReducer, useState } from "react"
import { View, Text, FlatList, TextInput, TouchableOpacity, BackHandler } from "react-native"
import { styles } from "./style"

import pharmacies from "../../data/pharmacie"
import medicines from "../../data/medicines"

import { Card, ListItem } from '@rneui/base';
import { IconButton } from 'react-native-paper';


export default function Medicines({ route }) {
    const { pharmacieID } = route.params;
    
    const pharmacie = pharmacies.filter((item) => {
        return item["id"] === pharmacieID
    })
    
    const medicinesList = medicines.filter(medicine => medicine.pharmacieID === pharmacie[0].id)
    const [quantidadeRemedio, setQuantidadeRemedio] = useState('')

    function atualizarQuantidade() {
        if (isNaN(quantidadeRemedio)) {
            var novoValor = 1
        } else {
            var novoValor = parseInt(quantidadeRemedio) + 1
        }
        setQuantidadeRemedio(novoValor.toString())
    }

    function getMedicines({ item: medicine }) {
        return (
            <View>
                <ListItem key={medicine.id} bottomDivider>
                    <IconButton
                        icon="pill"
                        size={40}
                        color='#7bb7e0'
                    />
                    <ListItem.Content>
                        <ListItem.Title style={styles.listItem}>{medicine.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content>
                        <TextInput value={quantidadeRemedio} editable={false} style={styles.inputQuantidade}></TextInput>
                    </ListItem.Content>
                    <ListItem.Content>
                        <IconButton
                            icon="plus-thick"
                            size={30}
                            color='green'
                            onPress={() => atualizarQuantidade()}
                        />
                    </ListItem.Content>
                </ListItem>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerMedicines}>
                <Card containerStyle={styles.card}>
                    <View style={styles.viewPharmacie}>
                        <View style={styles.avatar}>
                            <IconButton
                                icon="hospital-marker"
                                size={50}
                                color='#7bb7e0'
                            />
                        </View>
                        <Card.Divider />
                        <View style={styles.infoPharmacie}>
                            <Text style={styles.pharmacieName}>{pharmacie[0].name}</Text>
                            <Text style={styles.text}>Endereço: {pharmacie[0].endereco}</Text>
                        </View>
                    
                        {medicinesList != '' ? (
                            <FlatList
                            data={medicinesList}
                            keyExtractor={(medicine) => medicine.id.toString()}
                            renderItem={getMedicines}
                        />
                        ) : (
                            <View style={styles.viewButtons}>
                                <Text style={styles.messageMedicinesNone}>Nenhum medicamento disponivel!</Text>
                            </View>
                        )}
                        <View style={styles.viewButtons}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textButton}>Reservar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Card>
            </View>
        </View>
    )
}
