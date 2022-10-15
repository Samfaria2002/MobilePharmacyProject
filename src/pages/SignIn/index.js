import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.formContext}>
      <View style={{ width: "100%", alignItems: "center"}}>
        <Image source={require("../../assets/Logo.png")} style={styles.logo} />
      </View>

      
      <Text style={styles.textForm}>Login</Text>
      <TextInput style={styles.textInput} placeholder="Insira seu Login"></TextInput>

      <Text style={styles.textForm}>Senha</Text>
      <TextInput style={styles.textInput} placeholder="Insira sua Senha" secureTextEntry={true}></TextInput>

      <TouchableOpacity onPress={ () => navigation.navigate('SignIn')} style={styles.button}>
        <Text style={styles.textButton}>Fazer Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => navigation.navigate('Register')} style={styles.registerBox}>
        <Text style={styles.registerText}>Registre-se</Text>
      </TouchableOpacity>
    </View>
  );
}