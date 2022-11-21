import { StyleSheet, Dimensions } from "react-native"

exports.styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: Dimensions.get("window").height
    },
    viewPharmacies: {
        width: '95%',
        height: '95%',
        backgroundColor: "#FFF",
        borderRadius: 30,
        marginTop: 20,
        paddingTop: 30
    },
    item: {
        flex: 1
    },
    textInformacao: {
        color: "#26a69a",
        marginTop: 5
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 5,
        color: '#80cbc4'
    },
    containerMedicines: {
        flex: 1,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width
    },
    card: {
        height: '96%',
        borderRadius: 30,
    }
})
