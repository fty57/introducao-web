import React from 'react'
import { View, Text, Button } from 'react-native'

export default props => {
     return (
          <View>
               <View>
                    <Text>Resultado</Text>
               </View>

               <View>
                    <Text>Peso: {props.route.params.weight} </Text>
                    <Text>Altura: {props.route.params.height} </Text>
               </View>
               <Button
                    title="Home"
                    onPress={() => {
                         props.navigation.goBack();
                    }}
               />
          </View>


     )
}