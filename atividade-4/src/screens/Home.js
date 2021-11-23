import React from 'react'
import { Text, View , Button} from 'react-native'

export default ({navigation}) => {
     return (
          <View>
               <Text >Home</Text>
               <Button 
                    title='Cadastro'
                    onPress={() => {
                         navigation.navigate('Cadastro')
                    }}
               />
               <Button
                    title='IMC'
                    onPress={() => {
                         navigation.navigate('IMC')
                    }}
               />
               <Button
                    title='Sobre'
                    onPress={() => {
                         navigation.navigate('Sobre')
                    }}
               />
          </View>
     )
}