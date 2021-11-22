import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'

// IMPORTS
import IMCCalc from '../components/IMCCalc'


export default IMCApp => {
     // Estou optando por utilizar componentes funcionais
     const [weight, setWeight] = useState(0)
     const [height, setHeight] = useState(0)
     const [isPressed, setIsPressed] = useState(false)

     const isPress = () => {
          isPressed == false ? 
          isPressed = setIsPressed(true) : 
          isPressed = setIsPressed(false)
     }

     function isHandlePress(number){
          if(number != null && isPressed){
               return number
          }else{
               console.warn("Caiu no ELSE")
          }
     }

     return (
          <View style={styles.Container}>
               <View style={styles.subContainer}>
                    <View>
                         <Text>Altura:</Text>
                         <TextInput
                              style={styles.input}
                              onChangeText={height => setHeight(height)}
                         />
                    </View>
                    <View>
                         <Text>Peso:</Text>
                         <TextInput
                              style={styles.input}
                              onChangeText={weight => setWeight(weight)}
                         />
                    </View>
               </View>


               <Button
                    onPress={() => { isPress }}
                    title="Calcular"
                    color="#841584"
               />

               <View style={styles.result}>
                    <IMCCalc 
                         weight={isHandlePress(weight)} 
                         height={isHandlePress(height)} 
                    />
               </View>

          </View>
     )
}

const styles = StyleSheet.create({
     input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
     },
     result: {
          borderWidth: 1,
          margin: 10,
          padding: 20,
     },
     subContainer: {
          borderWidth: 4,
          borderColor: '#841584',
          padding: 10,
     }
});