import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { styles } from "../SignIn/style";
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'

export default function Register() {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({})

  // função para cadastrar user
  const handleSingUp = (data) => {
    console.log(data)
    // if (senha == confirmaSenha) {
    //   navigation.navigate("SignIn")
    // } else {
    //   alert('As senhas precisam ser iguais!')
    // }
  }


  const [username, setUsername] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmaSenha, setConfirmaSenha] = useState('')
  const userType = "c"
  const [name, setName] = useState('')
  const [sexo, setSexo] = useState('')
  // const [email, setEmail] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')


  return (
    <KeyboardAvoidingView style={styles.keyBoardView} behavior="padding">
      <View style={styles.formContext}>

        <View style={styles.registerTitleBox}>
          <Text style={styles.registerTitle}>Crie sua conta para começar!</Text>
        </View>

        <Text style={styles.textForm}>Login</Text>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Insira um username"
            ></TextInput>
          )}
        />

        <Text style={styles.textForm}>Nome</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Insira seu nome completo"
            ></TextInput>
          )}
        />

        <Text style={styles.textForm}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Insira seu email"
            ></TextInput>
          )}
        />




        <Text style={styles.textForm}>Nome completo</Text>
        <TextInput style={styles.textInput} placeholder="Insira seu nome completo" ></TextInput>

        <Text style={styles.textForm}>Data de nascimento</Text>
        <TextInput style={styles.textInput} keyboardType="numbers-and-punctuation" placeholder="Insira sua data de nascimento" ></TextInput>

        <Text style={styles.textForm}>Senha</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Insira sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        ></TextInput>

        <Text style={styles.textForm}>Confirmar senha</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Insira sua senha"
          secureTextEntry={true}
          value={confirmaSenha}
          onChangeText={(text) => setConfirmaSenha(text)}
        ></TextInput>

        <TouchableOpacity onPress={handleSubmit(handleSingUp)} style={styles.button}>
          <Text style={styles.textButton}>Registrar</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}