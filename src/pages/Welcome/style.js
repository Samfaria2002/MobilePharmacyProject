import { StyleSheet } from "react-native";

exports.styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7bb7e0',
    },
  
    containerLogo: {
      flex: 2,
      backgroundColor: '#7bb7e0',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    containerForm: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%'
    },
  
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 28,
      marginBottom: 12,
    },
  
    text: {
      color: '#a1a1a1',
    },
  
    buttonBox: {
      position: 'absolute',
      width: '60%',
      backgroundColor: '#7bb7e0',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      paddingVertical: 8,
      alignSelf: 'center',
      bottom: '15%',
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    buttonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight:'bold'
    },
  }) 