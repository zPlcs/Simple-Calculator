import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'

export default props => {
  const varButtons = [estilo.button]
  if (props.triplo) varButtons.push(estilo.buttonTriplo)
  if (props.duplo) varButtons.push(estilo.buttonDuplo)
  if (props.operacao) varButtons.push(estilo.buttonOperacao)

  return (
    <TouchableOpacity style={varButtons} onPress={props.onClick}>
      <Text style={estilo.buttonTxt}>{props.label}</Text>
    </TouchableOpacity>
  );
}

const estilo = StyleSheet.create ({
  button:{
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    backgroundColor: '#e6e6e6',
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

    buttonDuplo:{
    width: (Dimensions.get('window').width / 4) * 2,
  },

  buttonTriplo:{
    width: (Dimensions.get('window').width / 4) * 3,
  },

  buttonOperacao:{
    backgroundColor: '#b19cd9',

  },

  buttonTxt: {
    fontSize: 40,
  }
})
