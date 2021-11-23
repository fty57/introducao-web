import React from 'react'
import { Text, View, Button } from 'react-native'
//, age, email, course
//<Text>Idade: {age} </Text>
//<Text>Email: {email} </Text>
//<Text>Curso: {course} </Text>

export default ({navigation, name}) => {
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
                         navigation.goBack();
                    }}
               />
          </View>
     )
}