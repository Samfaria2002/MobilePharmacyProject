import { View, Text, TextInput, Image, TouchableOpacity, Dimensions } from "react-native";
import { styles } from "./style";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'
import MapView from 'react-native-maps'
import Search from "../components/search"
import { IconButton } from 'react-native-paper';

export default function Home() {

    function messageError(){
        alert('Ainda temos essa funcionalidade tente novamente em atualizações futuras :D \n\nNós da HelpPharm estamos sempre trabalhando para melhorar!')
    }
    const { width } = Dimensions.get('window');

    const navigation = useNavigation();
    let [regiao, setRegio] = useState({
        latitude: -19.91449234135285,
        longitude: -44.07467773795079,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    })

    function teste(){
        navigation.navigate('UserPage')
    }

    return (
        <View style={styles.formContext}>

            <View style={{ width: "100%", alignItems: "center" }}>
                <Image source={require("../../assets/Logo.png")} style={styles.logo} />
            </View>

            <View style={styles.rowIcons}>
                <IconButton
                    icon="account"
                    size={50}
                    onPress={() => teste()}
                    color='white'
                    style={styles.iconBox}
                />
                <IconButton
                    icon="file-document-multiple"
                    size={50}
                    onPress={() => messageError()}
                    color='white'
                    style={styles.iconBox}
                />
                <IconButton
                    icon="cog"
                    size={50}
                    onPress={() => messageError()}
                    color='white'
                    style={styles.iconBox}
                />
            </View>

            <Text style={styles.textForm}>Buscar remédio</Text>
            <Search></Search>

            <View style={{ width: "100%", alignItems: 'stretch', flex: 1, justifyContent: 'center', }}>
                <View style={styles.mapArea}>
                    <MapView style={{ height: '100%' }} initialRegion={regiao} />
                </View>
            </View>
        </View>
    );
}