import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default props => {
  return(
    <View style={estilo.container}>
      <Text numberOfLines={1} style={estilo.displayTxt}>{props.value}</Text>
    </View>
  );
} 

const estilo = StyleSheet.create ({
  container:{
    flex: 1,
    backgroundColor: '#7f6f9e',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderColor: 'black',
    borderWidth: 1,
    padding: 20
  },

  displayTxt:{
    fontSize: 60,
    color: 'white'
  }
})