import React from 'react'
import { Text, View, Button} from 'react-native'

import Card from '../components/Card'

export default ({ navigation }) => {
     return (
          // Lembrar de transformar isso em um componente !!!
          <View>
               <Card title='HOME'/>
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
