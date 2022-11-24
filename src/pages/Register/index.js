import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Register() {
  const navigation = useNavigation();

  const schema = yup.object({
    username: yup.string().required("Informe um nome de usuario"),
    name: yup.string().required("Informe seu nome completo"),
    email: yup.string().email("Email Invalido").required("Informe seu email"),
    password: yup.string().min(4, "A senha precisa conter pelo menos 4 caracteres").required("Informe uma senha"),

  })

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  // função para cadastrar user
  const handleSingUp = (data) => {
    data.sex = "M"
    data.userType = "C"
    data.pharmacyId = null
    
    console.log(data)
    if (data.password == data['password-confirm']) {
      fetch('https://spartom.pythonanywhere.com/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then(resp => resp.json())
        .then(resp => {
          console.log(resp)
          if (resp != '') {
            alert("Cadastro realizado com sucesso!")
            navigation.navigate('SignIn')
          } else {
            alert(resp)
          }
        })
    } else {
      alert('As senhas precisam ser iguais!')
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
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
              style={[styles.textInput, { borderWidth: errors.username && 2, borderColor: errors.username && 'red' }]}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Insira um username"
            ></TextInput>
          )}
        />
        {errors.username && <Text style={{ alignSelf: 'flex-start', color: 'red', marginBottom: 8 }}>{errors.username?.message}</Text>}

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

        <Text style={styles.textForm}>Sexo</Text>
        <Controller
          control={control}
          name="sex"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              onBlur={onBlur}
              value={"M"}
              placeholder="Insira seu sexo"
            ></TextInput>
          )}
        />

        <Text style={styles.textForm}>UserType</Text>
        <Controller
          control={control}
          name="userType"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              onBlur={onBlur}
              value={"C"}
              placeholder=""
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

        <Text style={styles.textForm}>Data de nascimento</Text>
        <Controller
          control={control}
          name="data-nascimento"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="dd/MM/yyyy"
              keyboardType="numbers-and-punctuation"
            ></TextInput>
          )}
        />

        <Text style={styles.textForm}>Senha</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Insira sua senha"
              secureTextEntry={true}
            ></TextInput>
          )}
        />

        <Text style={styles.textForm}>Confirmar senha</Text>
        <Controller
          control={control}
          name="password-confirm"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Insira sua senha"
              secureTextEntry={true}
            ></TextInput>
          )}
        />

        <TouchableOpacity onPress={handleSubmit(handleSingUp)} style={styles.button}>
          <Text style={styles.textButton}>Registrar</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}