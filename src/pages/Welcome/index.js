import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image
          animation='flipInY'
          source={require('../../assets/LogoRemedioFundoAzul.png')}
          style={{width: '100%'}}
          resizeMode='contain'
        ></Animatable.Image>
      </View>

      <Animatable.View delay={900} animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.title}>Veja remédios disponíveis e realize reservas de qualquer lugar!</Text>
        <Text style={styles.text}>Faça login ou registre uma conta para começar</Text>

        <TouchableOpacity onPress={ () => navigation.navigate('SignIn')} style={styles.buttonBox}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({

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