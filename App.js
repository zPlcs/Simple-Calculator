import React, { useState } from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import Button from './components/Button'
import Display from './components/Display'

export default App => {


const [displayValue, setDisplayValue] = useState("0")


  const addNum = (num) => {
    setDisplayValue(displayValue === "0" ? num : displayValue + num);
  }

  const clearNum = () => {
    setDisplayValue("0")
  }


  const calc = () => {
    try { 
      setDisplayValue(eval(displayValue)) 
      } catch(e) { 
        setDisplayValue("NaN")
      } 
  }

    return(
      <SafeAreaView style={estilo.main}>
      <Display value={displayValue}/>
        <View style={estilo.teclado}>
        <Button label='AC' onClick={clearNum} />
        <Button label='(' onClick={() => addNum("(")} />
        <Button label=')'onClick={() => addNum(")")} />
        <Button label='/' operacao  onClick={() => addNum("/")}/>
        <Button label='7' onClick={() => addNum("7")} />
        <Button label='8' onClick={() => addNum("8")} />
        <Button label='9' onClick={() => addNum("9")} />
        <Button label='*' operacao  onClick={() => addNum("*")}/>
        <Button label='4' onClick={() => addNum("4")} />
        <Button label='5' onClick={() => addNum("5")} />
        <Button label='6' onClick={() => addNum("6")} />
        <Button label='+' operacao onClick={() => addNum("+")}/>
        <Button label='1' onClick={() => addNum("1")} />
        <Button label='2' onClick={() => addNum("2")} />
        <Button label='3' onClick={() => addNum("3")} />
        <Button label='-' operacao  onClick={() => addNum("-")}/>
        <Button label='0' onClick={() => addNum("0")}  duplo/>
        <Button label='.' onClick={() => addNum(".")} />
        <Button label='=' operacao onClick={calc}/>
        </View>
      </SafeAreaView>
    );
}

const estilo = StyleSheet.create ({
  main:{flex: 1},
  teclado:{flexDirection: 'row', flexWrap: 'wrap'}
})
