import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'


export default props => {
     const [name, setName] = useState('')
     const [age, setAge] = useState(0)
     const [email, setEmail] = useState('')
     const [course, setCourse] = useState('')


     return (
          <View>
               <View>
                    <Text>Cadastro</Text>
               </View>

               <View>
                    <TextInput
                         onChangeText={(name) => setName({ name: name })}
                         placeholder='Name'
                    />
               </View>

               <View>
                    <TextInput
                         onChangeText={(age) => setAge({ age: age })}
                         placeholder='Age'
                    />
               </View>

               <View>
                    <TextInput
                         onChangeText={(email) => setEmail({ email: email })}
                         placeholder='Email'
                    />
               </View>

               <View>
                    <TextInput
                         onChangeText={(course) => setCourse({ course: course })}
                         placeholder='Course'
                    />
               </View>


               <View>
                    <Button
                         title='Cadastrar'
                         onPress={() => props.navigation.navigate('Perfil', { name })}
                    />
               </View>

          </View>
     )
}