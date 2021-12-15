import React, { useState, useEffect } from 'react'
import {
     View,
     Text,
     ScrollView,
     Button,
     StyleSheet
} from 'react-native'

import { TextInput } from 'react-native-gesture-handler'

import firebase from '../firebase/firebase_config'

const EditUserScreen = (props) => {

     const initialState = { id: '', name: '', surname: '', course: '', ira: '' }
     const [user, setUser] = useState(initialState)

     useEffect(
          () => {
               const id = props.route.params.userId
               getUserById(id)
          },
          []
     )

     const handleChangeText = (value, prop) => {
          setUser({ ...user, [prop]: value })
     }

     const getUserById = async (id) => {
          const dbRef = firebase.db.collection('users').doc(id)
          const doc = await dbRef.get()
          const user = doc.data()
          setUser({ ...user, id: doc.id })
     }

     const deleteUser = async () => {
          const dbRef = firebase.db.collection('users').doc(props.route.params.userId)
          await dbRef.delete()
          props.navigation.navigate('ListUserScreen')
     }

     const updateUser = async () => {
          const userRef = firebase.db.collection("users").doc(user.id);
          await userRef.set({
               name: user.name,
               surname: user.surname,
               course: user.course,
               ira: user.ira,
          });
          setUser(initialState);
          props.navigation.navigate("ListUserScreen");
     };

     return (
          <ScrollView style={styles.container}>
               <View>
                    <TextInput
                         placeholder='Nome'
                         style={styles.inputGroup}
                         value={user.name}
                         onChangeText={(value) => handleChangeText(value, 'name')}
                    />
               </View>
               <View>
                    <TextInput
                         placeholder='Sobrenome'
                         style={styles.inputGroup}
                         value={user.surname}
                         onChangeText={(value) => handleChangeText(value, 'surname')}
                    />
               </View>

               <View>
                    <TextInput
                         placeholder='Curso'
                         style={styles.inputGroup}
                         value={user.course}
                         onChangeText={(value) => handleChangeText(value, 'course')}
                    />
               </View>

               <View>
                    <TextInput
                         placeholder='Ira'
                         style={styles.inputGroup}
                         value={user.ira}
                         onChangeText={(value) => handleChangeText(value, 'ira')}
                    />
               </View>

               <View style={styles.btn}>
                    <Button
                         title='Delete'
                         color='#E37399'
                         onPress={() => {
                              deleteUser()
                         }}
                    />
               </View>
               <View style={styles.btn}>
                    <Button
                         title='Update'
                         onPress={() =>{
                              updateUser()
                         }}
                    />
               </View>

          </ScrollView>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          padding: 35,
     },
     loader: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
     },
     inputGroup: {
          flex: 1,
          padding: 0,
          marginBottom: 15,
          borderBottomWidth: 1,
          borderBottomColor: "#cccccc",
     },
     btn: {
          marginBottom: 7,
     },
})

export default EditUserScreen