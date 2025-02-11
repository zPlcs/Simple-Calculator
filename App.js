import React, { useState } from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import Button from './components/Button'
import Display from './components/Display'

export default App => {
const [displayValue, setDisplayValue] = useState(0)
    return(
      <SafeAreaView style={estilo.main}>
      <Display value={displayValue}/>
        <View style={estilo.teclado}>
        <Button label='AC' triplo/>
        <Button label='/' operacao/>
        <Button label='7'/>
        <Button label='8'/>
        <Button label='9'/>
        <Button label='*' operacao/>
        <Button label='4'/>
        <Button label='5'/>
        <Button label='6'/>
        <Button label='+' operacao/>
        <Button label='1'/>
        <Button label='2'/>
        <Button label='3'/>
        <Button label='-' operacao/>
        <Button label='0' duplo/>
        <Button label='.'/>
        <Button label='=' operacao/>
        </View>
      </SafeAreaView>
    );
}

const estilo = StyleSheet.create ({
  main:{flex: 1},
  teclado:{flexDirection: 'row', flexWrap: 'wrap'}
})