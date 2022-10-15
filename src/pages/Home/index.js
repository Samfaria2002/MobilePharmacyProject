import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import MapView from 'react-native-maps'

export default function Home() {
    const navigation = useNavigation();
    let [regiao, setRegio] = useState({
        latitude: -19.91449234135285,
        longitude: -44.07467773795079,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })

    return (
        <View style={styles.formContext}>

            <View style={{ width: "100%", alignItems: "center" }}>
                <Image source={require("../../assets/Logo.png")} style={styles.logo} />
            </View>


            <Text style={styles.textForm}>Pesquisar</Text>
            <TextInput style={styles.textInput} placeholder="Ex: "></TextInput>

            <View style={{ width: "100%", alignItems: "center" }}>
                <MapView style={{ width: 400, height: 400 }} initialRegion={regiao}/>
            </View>


        </View>
    );
}