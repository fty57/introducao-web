import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


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

export default ({number}) => {
     const colorette = number >= 18.5 && number < 24.55 ? {color: 'blue'} : {color : 'red'}

     return (
          <View>
               <Text style={[colorette, styles.txtStrong]}>{numberMessage(number)}</Text>
          </View>
     )
}

const styles = StyleSheet.create({
     txtStrong: {
          fontSize: 20,
          fontWeight: 'bold',
     }
})

