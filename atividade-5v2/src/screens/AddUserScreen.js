import React, { useState } from 'react'
import {
     View,
     Text,
     Button,
     TextInput,
     ScrollView,
     StyleSheet
} from 'react-native'

import firebase from '../firebase/firebase_config'

const AddUserScreen = () => {

     const initialState = { name: '', surname: '', course: '', ira: '' }
     const [state, setState] = useState(initialState)

     const addNewUser = async () => {
          try {
                await firebase.db.collection('users')
                    .add({
                         name: state.name,
                         surname: state.surname,
                         course: state.course,
                         ira: state.ira
                    }) 
          } catch (error) {
               console.log(error)
          }
     }

     const handleChangeText = (value, name) => {
          setState({ ...state, [name]: value })
     }

     return (
          <ScrollView style={styles.container}>
               <View style={styles.input}>
                    <TextInput
                         placeholder='Nome'
                         value={state.name}
                         onChangeText={(value) => handleChangeText(value, 'name')}
                    />
               </View>

               <View style={styles.input}>
                    <TextInput
                         placeholder='Sobrenome'
                         value={state.surname}
                         onChangeText={(value) => handleChangeText(value, 'surname')}
                    />
               </View>

               <View style={styles.input}>
                    <TextInput
                         placeholder='Curso'
                         value={state.course}
                         onChangeText={(value) => handleChangeText(value, 'course')}
                    />
               </View>

               <View style={styles.input}>
                    <TextInput
                         placeholder='IRA'
                         value={state.ira}
                         onChangeText={(value) => handleChangeText(value, 'ira')}
                    />
               </View>

               <View>
                    <Button title='Add User' onPress={() => addNewUser()} />
               </View>
          </ScrollView>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          padding: 35
     },
     input: {
          flex: 1,
          padding: 0,
          top: 0,
          marginBottom: 15,
          borderBottomWidth: 1,
          borderBottomColor: "#CCCCCC"
     },
})

export default AddUserScreen