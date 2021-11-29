import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Button } from 'react-native'



export default props => {
     const [weight, setWeight] = useState(0)
     const [height, setHeight] = useState(0)
     const [isPressed, setIsPressed] = useState(false)

     useEffect(() => { // Pra ficar monitorando caso o botão seja pressionado
          if(isPressed){ 
               // Se o botão foi pressionado, chame a outra tela, passando o peso e altura
               props.navigation.navigate('Resultado', { weight, height })
               // Lembre-se de resetar o estado do botão, para que ele possa ser pressionado novamente
               setIsPressed(false)
          }
     })

     return (
          <View >
              <View>
                   <TextInput
                         onChangeText={(weight) => setWeight({ weight: weight })}
                         placeholder='Peso'
                   />
              </View>

              <View>
                   <TextInput
                         onChangeText={(height) => setHeight({ height: height })}
                         placeholder='Altura'
                   />
              </View>

              <View>
                   <Button
                         title='OK'
                         onPress={()=>{
                              if(weight != null && height != null) setIsPressed(true)   
                         }}
                   />
              </View>

          </View>
     )
}