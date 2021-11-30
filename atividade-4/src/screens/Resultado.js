import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default props => {

     const weight = props.route.params.weight
     const height = props.route.params.height

     const imcValue = (weight / (height * height)).toFixed(2)

     function numberMessage(number) {
          if(number < 17){
               return 'Muito abaixo do peso'
          }else if(number >= 17 && number < 18.49){
               return 'Abaixo do peso'
          }else if(number >= 18.5 && number < 24.55){
               return 'Peso normal'
          }else if(number >= 25 && number < 29.99){
               return 'Acima do peso'
          }else if(number >= 30 && number < 34.99){
               return 'Obesidade I'
          }else if(number >= 35 && number < 39.99){
               return 'Obesidade II (severa)'
          }else{
               return 'Obesidade III (mórbida)'
          }
     }

     const colorette = imcValue >= 18.5 && imcValue < 24.55 ? {color: 'blue'} : {color : 'red'}

     return (
          <View>
               <View>
                    <Text>Resultado</Text>
               </View>

               <View>
                    <Text>Peso:   {props.route.params.weight} </Text>
                    <Text>Altura: {props.route.params.height} </Text>
                    <Text>IMC:{imcValue}</Text>
                    <Text style={[colorette, styles.txtStrong]}>{numberMessage(imcValue)}</Text>
               </View>
               <Button
                    title="Home"
                    onPress={() => props.navigation.navigate('Home')}
               />
          </View>


     )
}

const styles = StyleSheet.create({
     txtStrong: {
          fontSize: 20,
          fontWeight: 'bold',
     }
})