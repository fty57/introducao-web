import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { ListItem, Avatar, FAB, Divider } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

import firebase from '../firebase/firebase_config'

const ListUserScreen = (props) => {

     const [users, setUsers] = useState([])

     useEffect(
          () => {
               firebase.db.collection("users").onSnapshot((querySnapshot) => {
                    const users = [];
                    querySnapshot.docs.forEach((doc) => {
                         const { name, surname, course, ira } = doc.data();
                         users.push({
                              id: doc.id,
                              name,
                              surname,
                              course,
                              ira
                         });
                    });
                    setUsers(users);
               });
          }
          , []);


     return (
          <ScrollView>
               {
                    users.map((user) => {
                         return (
                              <ListItem
                                   key={user.id}
                                   bottomDivider
                                   onPress={() => {
                                        props.navigation.navigate('EditUserScreen', { userId: user.id })
                                   }}
                              >
                                   <ListItem.Chevron />
                                   <Avatar
                                        source={{
                                             uri: 'https://picon.ngfiles.com/805000/flash_805579_card.png'
                                        }}
                                        rounded
                                   />
                                   <ListItem.Content>
                                        <ListItem.Title>
                                             Nome: {user.name} {user.surname}
                                        </ListItem.Title>
                                        <ListItem.Subtitle>
                                             Curso: {user.course}
                                        </ListItem.Subtitle>
                                        <ListItem.Subtitle>
                                             Ira: {user.ira}
                                        </ListItem.Subtitle>
                                   </ListItem.Content>
                              </ListItem>
                         )
                    })
               }

               <View style={styles.fabButton}>
                    <FAB
                         title="+"
                         size="small"

                         onPress={() => { props.navigation.navigate("AddUserScreen") }}
                    />
               </View>
          </ScrollView>
     )
}

const styles = StyleSheet.create({
     fabButton: {
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          padding: 10,
     }
})
export default ListUserScreen