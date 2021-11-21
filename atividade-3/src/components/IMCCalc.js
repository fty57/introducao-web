import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

// IMPORTS
import IMCMsg from './IMCMsg'

export default ({ height, weight }) => {

     function Calculator(height, weight) {
          let imcValue = 0
          imcValue = (weight / (height * height)).toFixed(2)
          return imcValue
       
     }

     return (
          <View>
               <View>
                    <Text style={styles.txtStrong}>
                         O valor do seu IMC é {Calculator(height, weight)}
                    </Text>
               </View>

               <View>
                    <IMCMsg number={Calculator(height, weight)}/>
               </View>

          </View>



     )
     
}

const styles = StyleSheet.create({
     txtStrong: {
          fontSize: 20,
          fontWeight: 'bold',
     }
})