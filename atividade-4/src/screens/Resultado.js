import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import Card from '../components/Card'

export default props => {

     const weight = props.route.params.weight
     const height = props.route.params.height

     const imcValue = (weight / (height * height)).toFixed(2)

     function numberMessage(number) {
          if (number < 17) {
               return 'Muito abaixo do peso'
          } else if (number >= 17 && number < 18.49) {
               return 'Abaixo do peso'
          } else if (number >= 18.5 && number < 24.55) {
               return 'Peso normal'
          } else if (number >= 25 && number < 29.99) {
               return 'Acima do peso'
          } else if (number >= 30 && number < 34.99) {
               return 'Obesidade I'
          } else if (number >= 35 && number < 39.99) {
               return 'Obesidade II (severa)'
          } else {
               return 'Obesidade III (mórbida)'
          }
     }

     const colorette = imcValue >= 18.5 && imcValue < 24.55 ? { backgroundColor: 'blue' } : { backgroundColor: 'red' }

     return (
          <View>
               <Card title='RESULT' />

               <View style={styles.viewResult}>
                    <View style={styles.aroundSpace}>
                         <Text style={styles.textResult}>
                              PESO:
                         </Text>
                         <Text style={styles.textResultValue}>
                              {props.route.params.weight}
                         </Text>
                    </View>

                    <View style={styles.aroundSpace}>
                         <Text style={styles.textResult}>
                              ALTURA:
                         </Text>
                         <Text style={styles.textResultValue}>
                              {props.route.params.height}
                         </Text>
                    </View>

                    <View style={styles.aroundSpace}>
                         <Text style={styles.textResult}>
                              IMC:
                         </Text>
                         <Text style={styles.textResultValue}>
                              {imcValue}
                         </Text>
                    </View>

                    <View style={[colorette, styles.backgroundTitle]}>
                         <Text style={styles.title}>
                              {numberMessage(imcValue)}
                         </Text>
                    </View>

               </View>
               <Button
                    title="Home"
                    onPress={() => props.navigation.navigate('Home')}
               />
          </View>


     )
}

const styles = StyleSheet.create({
     viewResult: {
          width: '100%',
          height: '50%',
          backgroundColor: 'slategray'
     },
     aroundSpace: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around'
     },
     textResult: {
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'left'
     },
     textResultValue: {
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
     },
     backgroundTitle: {
          width: '100%',
          height: 100,
     },
     title: {
          color: 'white',
          fontSize: 30,
          alignSelf: 'center',
          marginTop: 25
     }
})