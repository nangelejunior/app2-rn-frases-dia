/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
}

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();

  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  var frases = Array();
  frases[0] = 'O importante não é vencer todos os dias, mas lutar sempre. - Waldemar Valle Martins';
  frases[1] = 'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado! - Rui Barbosa';
  frases[2] = 'É melhor conquistar a si mesmo do que vencer mil batalhas. - Buda';
  frases[3] = 'Enquanto houver vontade de lutar haverá esperança de vencer. - Santo Agostinho';
  frases[4] = 'Difícil é ganhar um amigo em uma hora; fácil é ofendê-lo em um minuto. - Provérbio Chinês';

  var fraseEscolhida = frases[ numeroAleatorio ];

  Alert.alert(fraseEscolhida);
}

export default class App extends Component<{}> {
  render() {

    const { principal, botao, textoBotao } = Estilos

    return (
      <View style={principal}>

        <Image source={ require('./imgs/logo.png') } />

        <TouchableOpacity onPress={gerarNovaFrase} style={botao}>

          <Text style={textoBotao}>Nova frase</Text>

        </TouchableOpacity>

      </View>
    );
  }
}
