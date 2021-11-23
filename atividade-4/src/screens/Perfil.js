import React from 'react'
import { Text, View, Button } from 'react-native'


export default ({ navigation, nome, idade, email, curso }) => {
     return (
          <View>
               <View>
                    <Text>Perfil</Text>
               </View>

               <View>
                    <Text>Nome:  {nome} </Text>
                    <Text>Idade: {idade} </Text>
                    <Text>Email: {email} </Text>
                    <Text>Curso: {curso} </Text>
               </View>


               <Button
                    title="Home"
                    onPress={() => {
                         navigation.goBack();
                    }}
               />
          </View>
     )
}