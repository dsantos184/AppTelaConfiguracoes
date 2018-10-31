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
                    dia:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26",'27',"28","29","30","31"],
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
                    dia: "1",
                    mes: 'Janeiro',
                }

            }
        }

        this.selectDiaNasc = this.selectDiaNasc.bind(this);
        this.selectMesNasc = this.selectMesNasc.bind(this);
        this.selectSexo = this.selectSexo.bind(this);
    }

    selectDiaNasc(dia)
    {
        let s = this.state.dadosPessoais;

        s.selectedDtNasc.dia = dia;

        this.setState(s);
    }

    selectMesNasc(mes)
    {
        let s = this.state.dadosPessoais;
        s.selectedDtNasc.mes = mes;

        this.setState(s);
    }

    selectSexo(sexo)
    {
        let s = this.state.dadosPessoais
        s.sexo = sexo;
        this.setState(s);
    }

    render() {
        
        const { dataNasc } = this.state.dadosPessoais;

        const PickerDiaNasc = dataNasc.dia.map((dia, key)=>{
            return(
                <Picker.Item key={key.toString()}  value={dia} label={dia}/>
            )
        });

        const pickerMesNasc = dataNasc.mes.map((mes, key)=>{
            return(
                <Picker.Item key={key.toString()} value={mes} label={mes} />
            )
        });

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

                    <View style={[styles.containerInput, styles.containerDtNasc]}>

                        <Picker 
                            onValueChange={(value)=>this.selectDiaNasc(value)} 
                            style={[styles.picker, styles.diaNasc]}
                            selectedValue={this.state.dadosPessoais.selectedDtNasc.dia}
                        >
                            {PickerDiaNasc}
                        </Picker>
                        
                        <Picker 
                            selectedValue={this.state.dadosPessoais.selectedDtNasc.mes}
                            onValueChange={(value)=>this.selectMesNasc(value)} 
                            style={[styles.picker, styles.mesNasc]}>
                            {pickerMesNasc}
                        </Picker>
                        
                        <TextInput 
                            keyboardType='numeric' 
                            style={styles.anoNasc} 
                            placeholder="Ano"                            
                        />
                    </View>
                </View>
                
                <View style={styles.containerLabelDataNasc}>
                    <Text style={[styles.label, styles.labelDataNasc]}>Data Nasc:</Text>
                </View>

                <View style={styles.containerLineForm}>
                    
                    <View style={styles.containerLabel}>
                        <Text style={styles.label}>sexo:</Text>
                    </View>
                    
                    <Picker
                        selectedValue={this.state.dadosPessoais.sexo}
                        onValueChange={(value)=>this.selectSexo(value)}
                    >
                    
                    </Picker>
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

  containerDtNasc:
  {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginTop: 20,
    padding: 10,
    height: 60,
  },
  
  labelDiaNasc:
  {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  diaNasc:
  {
    flex: 2,
  },

  labelMesNasc:
  {
    flex: 1,
  },

  mesNasc:
  {
    flex: 3,
  },

  anoNasc:
  {
    flex: 2,
  },

  containerLabelDataNasc:
  {
    marginTop: -30,
    marginLeft: 10,
    zIndex: 0,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    width: 80,
  },    
});