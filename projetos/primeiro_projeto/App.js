import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
// StyleSheet
//SNIPPET imrn = import {  } from 'react-native';

export default class PrimeiroProjeto extends Component{

  somar (numero1, numero2){
    return numero1+numero2;
  }

  render (){

    let nome = "Fabiano F. P. Stoffel"
    return(
      <View>
        <Text style={styles.texto}>Meu nome é {
            `"Isso dentro da crase:" nome ${nome}`+"\nExecução de uma função: "
            +this.somar(5,4)
          }
        </Text>
        <Button title="Função Anônima" onPress={() => {
          alert("Fui Apertado!");
        } } />        
      </View>
            
    );
  }
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 30
  }
});