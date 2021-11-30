import React, { useEffect } from 'react'
import { Text, View, TextInput, Button } from 'react-native'



export default class IMC extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               weight: 0,
               height: 0,
               isPress: false,
          }
     }
     actionButton = () =>{
          this.setState({isPress: true})
     }

     next(){
          if(this.state.isPress && this.state.weight != null && this.state.weight != null){
               this.props.navigation.navigate('Resultado', { weight: this.state.weight, height: this.state.height })
          }     
     }

     render() {

          return (

               <View >
                    <View>
                         <TextInput
                              onChangeText={(weight) => this.setState({ weight })}
                              placeholder='Peso'
                         />
                    </View>

                    <View>
                         <TextInput
                              onChangeText={(height) => this.setState({ height })}
                              placeholder='Altura'
                         />
                    </View>

                    <View>
                         <Button
                              title='OK'
                              onPress={this.actionButton}
                         />
                    </View>
                    {this.next()}
               </View>
          )
     }
}