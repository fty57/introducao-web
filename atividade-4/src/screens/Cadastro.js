import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

import Perfil from './Perfil'

export default props => {
     const native = props.navigation
     const [name, setName] = useState('')
     const [age, setAge] = useState(0)
     const [email, setEmail] = useState('')
     const [course, setCourse] = useState('')


     function register(name) {
          if(name != null){
               native.navigate('Perfil', {name : name})
          }else{
               console.warn('Nome não inserido')
          }
     }
     return (
          <View>
               <View>
                    <Text>Cadastro</Text>
               </View>

               <View>
                    <TextInput
                         onChangeText={() => setName(name)}
                         placeholder='Name'
                    />
               </View>

               <View>
                    <Button
                         title='Cadastrar'
                         onPress={() => {register(name)}}
                    />
               </View>

          </View>
     )
}