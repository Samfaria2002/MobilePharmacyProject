import { StyleSheet, Dimensions } from "react-native"

exports.styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
    },
    card: {
        height: '96%',
        borderRadius: 30,
    },
    avatar: {
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        marginTop: 30
    },
    pharmacieName: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    viewPharmacie: {
        width: '100%',
        height: '100%'
    },
    listItem: {
        fontSize: 19,
        fontWeight: 'bold',
        width: 100
    },
    inputQuantidade: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        fontSize: 20,
        marginLeft: 40,
        textAlign: 'center'
    },
    infoPharmacie: {
        alignItems: 'center',
        marginBottom: 10
    },
    viewButtons: {
        height: '6%',
        width: '100%',
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
        justifyContent: 'space-evenly'
    },
    button: {
        backgroundColor: 'blue',
        height: '100%',
        width: '100%',
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    containerMedicines: {
        flex: 1,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
    },
    card: {
        height: '96%',
        borderRadius: 30,
    },
    messageMedicinesNone: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'red'
    }
})