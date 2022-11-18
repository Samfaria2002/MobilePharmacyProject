import { View, Text, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
  const navigation = useNavigation();
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = () => {
    if(login != '' && senha != ''){
      navigation.navigate('Home')
    }else{
      alert('Insira um usuário e senha validos')
    }
  }

  return (
    <KeyboardAvoidingView style={styles.keyBoardView} behavior="padding">
      <View style={styles.formContext}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={require("../../assets/Logo.png")} style={styles.logo} />
        </View>


        <Text style={styles.textForm}>Login</Text>
        <TextInput style={styles.textInput}
          placeholder="Insira seu Login"
          value={login}
          onChangeText={(text) => setLogin(text)}
        />

        <Text style={styles.textForm}>Senha</Text>
        <TextInput style={styles.textInput}
          placeholder="Insira sua Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.textButton}>Fazer Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerBox}>
          <Text style={styles.registerText}>Registre-se</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}