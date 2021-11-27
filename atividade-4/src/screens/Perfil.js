import React from 'react'
import { Text, View, Button } from 'react-native'


export default ({ name }) => {
     return (
          <View>
               <View>
                    <Text>Perfil</Text>
               </View>

               <View>
                    <Text>Nome:  {name} </Text>
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