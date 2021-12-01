import React, { Component } from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'

import Card from '../components/Card'

export default class Cadastro extends Component{
     constructor(props) {
          super(props)
          this.state = {
               name:'',
               age: 0,
               email: '',
               course: ''
          }
     }
     render(){
          return (
               <View>
                    <Card title='REGISTRATION'/>

                    <View style={styles.viewInput}>
                         <TextInput 
                              style={styles.input}
                              onChangeText={(name) => this.setState({name})}
                              placeholder='Name'
                         />
                    </View>

                    <View style={styles.viewInput} >
                         <TextInput 
                              style={styles.input}
                              onChangeText={(age) => this.setState({age})}
                              placeholder='Idade'
                         />
                    </View>

                    <View style={styles.viewInput}>
                         <TextInput 
                              style={styles.input}
                              onChangeText={(email) => this.setState({email})}
                              placeholder='Email'
                         />
                    </View>

                    <View style={styles.viewInput}>
                         <TextInput 
                              style={styles.input}
                              onChangeText={(course) => this.setState({course})}
                              placeholder='Curso'
                         />
                    </View>

                    <View>
                         <Button
                              title='OK'
                              onPress={() => this.props.navigation.navigate('Perfil', 
                              { 
                                   name: this.state.name, 
                                   age: this.state.age,
                                   email: this.state.email,
                                   course: this.state.course,
                              })}
                         />
                    </View>

               </View>
          )

     }
}

const styles = StyleSheet.create({
     viewInput: {
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          margin: 7,
          borderRadius: 10,
     },
     input: {
          padding: 10,
     }
})