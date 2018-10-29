import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import DadosPessoais from './src/pages/DadosPessoais';
import DadosFinanceiros from './src/pages/DadosFinanceiros'

const Navegador = TabNavigator({
  DadosPessoais:
  {
    screen: DadosPessoais,    
  },

  DadosFinanceiros:
  {
    screen: DadosFinanceiros
  }
});

export default Navegador