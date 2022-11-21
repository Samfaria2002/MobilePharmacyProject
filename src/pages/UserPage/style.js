import { StyleSheet, Dimensions } from "react-native"

exports.styles = StyleSheet.create({
    HeaderBar: {
        padding: 10,
        width: '100%',
        backgroundColor: '#7bb7e0'
    },
    card: {
        height: Dimensions.get("window").height,
        backgroundColor: 'blue',
        margin: 200
    },
})