import { View, ScrollView, TouchableHighlight, TouchableOpacity, Image, Text } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

export default function UserPage() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.HeaderBar}>
          <TouchableOpacity style={{ width: '100%', flexDirection: "row", marginTop: 20, justifyContent: 'center' }}>
            <Image style={{ height: 200, width: '50%', borderRadius: 100 }}
              source={require('../../assets/PessoaFotoPerfil.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', marginTop: 20, alignItems: 'center' }}>
          <Text style={{ fontSize: 40 }}>Leonardo da Silva</Text>
        </View>
        <View style={styles.card}>
          <Text style={{ fontSize: 40 }}>Engenheiro Militar</Text>
        </View>
    </View>
  )
}