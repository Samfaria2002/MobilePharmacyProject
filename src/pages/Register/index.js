import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { styles } from "../SignIn/style";
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Register() {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.keyBoardView} behavior="padding">
      <View style={styles.formContext}>

        <View style={styles.registerTitleBox}>
          <Text style={styles.registerTitle}>Crie sua conta para começar!</Text>
        </View>

        <Text style={styles.textForm}>Email</Text>
        <TextInput style={styles.textInput} placeholder="Insira seu email"></TextInput>

        <Text style={styles.textForm}>Nome completo</Text>
        <TextInput style={styles.textInput} placeholder="Insira seu nome completo" ></TextInput>

        <Text style={styles.textForm}>Data de nascimento</Text>
        <TextInput style={styles.textInput} keyboardType="numbers-and-punctuation" placeholder="Insira sua data de nascimento" ></TextInput>

        <Text style={styles.textForm}>Senha</Text>
        <TextInput style={styles.textInput} placeholder="Insira sua senha" secureTextEntry={true}></TextInput>

        <Text style={styles.textForm}>Confirmar senha</Text>
        <TextInput style={styles.textInput} placeholder="Insira sua senha" secureTextEntry={true}></TextInput>

        <TouchableOpacity onPress={() => navigation.navigate("SignIn")} style={styles.button}>
          <Text style={styles.textButton}>Registrar</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}