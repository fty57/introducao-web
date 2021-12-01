import React from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'

import Card from '../components/Card'

export default class IMC extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               weight: 0,
               height: 0,
               isPress: false,
          }
     }
     actionButton = () => {
          this.setState({ isPress: true })
     }

     next() {
          if (this.state.isPress && this.state.weight != null && this.state.weight != null) {
               this.props.navigation.navigate('Resultado', { weight: this.state.weight, height: this.state.height })
          }
     }

     render() {
          return (
               <View>
                    <Card title='IMC CALCULATOR'/>
                    
                    <View style={styles.viewInput}>
                         <TextInput 
                              style={styles.input}
                              onChangeText={(weight) => this.setState({ weight })}
                              placeholder='Peso'
                         />
                    </View>

                    <View style={styles.viewInput}>
                         <TextInput 
                              style={styles.input}
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