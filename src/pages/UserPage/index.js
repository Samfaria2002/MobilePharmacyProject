import {Text, View, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

export default function UserPage() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
        <StatusBar backgroundColor="#7bb7e0" barStyle="light-content"/>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        >
          <Image style={styles.imageUser} source={require('../../assets/user-8.jpg')}></Image>
          <Text style={styles.userName}>Bianca Ferreira</Text>
          <Text style={styles.aboutUser}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a elit nisl.</Text>
          <View style={styles.userBtnWrapper}>
            <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
              <Text style={styles.userBtnTxt}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
              <Text style={styles.userBtnTxt}>Alterar dados</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.userOrdersBox}>
            <Text style={styles.userOrderTitle}>Pedidos Cadastrados</Text>
          </View>
          <View style={styles.userInfoWrapper}>
            <View style={styles.userInfoItem}>
              <Text style={styles.userInfoTitle}>16</Text>
              <Text style={styles.userInfoSubTitle}>Realizados</Text>
            </View>
            <View style={styles.userInfoItem}>
              <Text style={styles.userInfoTitle}>10</Text>
              <Text style={styles.userInfoSubTitle}>Completos</Text>
            </View>
            <View style={styles.userInfoItem}>
              <Text style={styles.userInfoTitle}>6</Text>
              <Text style={styles.userInfoSubTitle}>Cancelados</Text>
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
  )
}