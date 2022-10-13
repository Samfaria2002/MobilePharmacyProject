/* Para rodar a aplicação usando o servidor Expo, abra o terminal e vá até a pasta 'project',
  em seguida digite o seguinte comando 'npm start' para rodar a aplicação no servidor e espere carregar por completo.
  
  Caso queira abrir Web, aperte 'W' na linha de comando do terminal ou aperte 'A' para
  abrir em sua emulação do android studio.*/

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#7bb7e0" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}
