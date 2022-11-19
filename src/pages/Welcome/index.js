import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from "./style";
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

