import React, { Component } from 'react'
import { Text, View, TextInput, Button } from 'react-native'


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
                    <View>
                         <Text>Cadastro</Text>
                    </View>

                    <View>
                         <TextInput
                              onChangeText={(name) => this.setState({name})}
                              placeholder='Name'
                         />
                    </View>

                    <View>
                         <TextInput
                              onChangeText={(age) => this.setState({age})}
                              placeholder='Idade'
                         />
                    </View>

                    <View>
                         <TextInput
                              onChangeText={(email) => this.setState({email})}
                              placeholder='Email'
                         />
                    </View>

                    <View>
                         <TextInput
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