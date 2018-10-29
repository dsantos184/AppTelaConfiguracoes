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
  Slider,
  Picker,
  TextInput
} from 'react-native';

export default class App extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            dadosFinanceiro:
            {
                salario: '',
                banco: '',
                qtdeCartoes: 0
            }
        }
    }

    render() {
        return (
        <View style={styles.container}>
            <Text>Dados Financeiros</Text>
        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
