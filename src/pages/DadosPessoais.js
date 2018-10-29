/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  Slider
} from 'react-native';


export default class App extends Component {

    constructor(props)
    {
        super(props)

        this.state = {
            dadosPessoais:
            {
                nome: '',
                dataNasc:
                {
                    dia:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                    mes: [
                        'Janeiro', 
                        'Fevereiro',
                        'Março',
                        'Abril',
                        'Maio',
                        'Junho',
                        'Julho',
                        'Agosto',
                        'Setembro',
                        'Outrubro',
                        'Novembro',
                        'Dezembor'
                    ],
                    ano: '',
                },
                sexo: '',
                altura: '',
                peso: '',
                doador: true,
                selectedDtNasc:
                {
                    dia: 1,
                    mes: 'Janeiro',
                }

            }
        }
    }

    render() {

        const teste = this.state.dadosPessoais.dataNasc.dia.map((dia, key)=>{
            return(
                <Picker.Item key={key}  value={dia} label={dia}/>
            )
        })

        return (
            <View style={styles.container}>
                
                <View style={styles.containerLineForm}>

                    <View style={styles.containerLabel}>
                        <Text style={styles.label}>Nome:</Text>
                    </View>

                    <View style={styles.containerInput}>
                        <TextInput style={[styles.nome, styles.input]} />
                    </View>

                </View>

                <View style={styles.containerLineForm}>

                    <View style={styles.containerLabel}>
                        <Text style={styles.label}>Data Nasc.:</Text>
                    </View>

                    <View style={[styles.containerInput]}>
                        <Picker onValueChange={()=>{}}>
                            <Picker.Item label={1} value={1} />
                        </Picker>
                    </View>

                </View>
            </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
    flex: 1,
  },

  containerLineForm:
  {
    flexDirection: 'row',
    height: 40,
   
  },

  containerLabel:
  {
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  containerInput:
  {
    flex: 3
  },  
});
