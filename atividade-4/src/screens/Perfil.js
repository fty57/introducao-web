import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Modal, Pressable } from 'react-native'


export default props => {
     const [modalVisible, setModalVisible] = useState(true);

     return (

          <View style={styles.centeredView}>
               <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                         Alert.alert("Esse modal irá fechar.");
                         setModalVisible(!modalVisible);
                    }}
               >
                    <View style={styles.centeredView}>
                         <View style={styles.modalView}>
                              <Text style={styles.modalText}>Perfil</Text>
                              <View style={{ margin: 10 }}>
                                   <Image
                                        style={styles.logo}
                                        source={{ uri: 'https://avatars.githubusercontent.com/u/59287050?v=4' }}
                                   />
                              </View>

                              <View>
                                   <Text>Nome:  {props.route.params.name} </Text>
                                   <Text>Idade: {props.route.params.age}</Text>
                                   <Text>Email: {props.route.params.email}</Text>
                                   <Text>Curso: {props.route.params.course}</Text>
                              </View>

                              <Pressable
                                   style={[styles.button, styles.buttonClose]}
                                   onPress={() => setModalVisible(!modalVisible)}
                              >
                                   <Text style={styles.textStyle}>Esconder Modal</Text>
                              </Pressable>
                         </View>
                    </View>
               </Modal>
               <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
               >
                    <Text style={styles.textStyle}>Mostrar Modal</Text>
               </Pressable>

               <Pressable
                    style={[styles.button, styles.buttonBack]}
                    onPress={() => props.navigation.navigate('Home')}
               >
                    <Text style={styles.textStyle}>Home</Text>
               </Pressable>

          </View>
     )
}


const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
     },
     logo: {
          width: 150,
          height: 150,
     },
     centeredView: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22
     },
     modalView: {
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
               width: 0,
               height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5
     },
     button: {
          borderRadius: 20,
          padding: 10,
          elevation: 2
     },
     buttonOpen: {
          backgroundColor: "#F194FF",
     },
     buttonClose: {
          backgroundColor: "#2196F3",
     },
     buttonBack: {
          backgroundColor: "#696969",
     },
     textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
     },
     modalText: {
          marginBottom: 20,
          fontWeight: "bold",
          textAlign: "center"
     }
})