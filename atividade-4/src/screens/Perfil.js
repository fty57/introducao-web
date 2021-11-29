import React from 'react'
import { Text, View, Button, Image } from 'react-native'


export default props => {
     return (
          <View>
               <View>
                    <Text>Perfil</Text>
               </View>

               <View>
                    <Image
                         source={{uri:'https://eduportugal.eu/wp-content/uploads/2019/07/Capa-Guia-do-estudante-brasileiro.jpg'}}
                    />
               </View>

               <View>
                    <Text>Nome:  {props.route.params.name} </Text>
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