import { View, Text, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function SignIn() {
  const navigation = useNavigation();
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = () => {
    navigation.navigate('Home')
  }

 
  return (
    <KeyboardAvoidingView style={styles.keyBoardView} behavior="padding">
      <View style={styles.formContext}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image source={require("../../assets/Logo.png")} style={styles.logo} />
        </View>

        <View>
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
        </View>
        <View style={{justifyContent: 'space-evenly', padding: 10, flex: 1 }}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.textButton}>Fazer Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.registerBox}>
            <Text style={styles.registerText}>Registre-se</Text>
          </TouchableOpacity>

          <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => alert('Login com Facebook')}>
            <Text style={{ fontSize: 25, color: 'white' }}>
              Login with Facebook
            </Text>
          </Icon.Button>
          <Icon.Button name="google" backgroundColor="#d6473c" onPress={() => alert('Login com Google')}>
            <Text style={{ fontSize: 25, color: 'white' }}>
              Login with Google
            </Text>
          </Icon.Button>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}