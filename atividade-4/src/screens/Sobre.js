import React from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native'

import Card from '../components/Card'
import Options from '../components/Options'



export default ({ navigation }) => {
     return (
          <View>
               <View style={styles.container}>
                    <Card title='SOBRE'/>

                    <View style={styles.backgroundParagraph}>
                         <Text style={styles.paragraph}>
                         A classificação do índice de massa corporal (IMC), pode ajudar a identificar obesidade ou desnutrição em crianças, adolescentes, adultos e idosos.Além de saber qual é o seu IMC, essa calculadora também indica qual deve ser o seu peso ideal para alcançar a sua melhor forma, e assim melhorar sua qualidade de vida, garantindo o seu bem estar.
                         </Text>
                    </View>
                    <View style={styles.backgroundLogo}>
                         <Image
                              style={styles.logo}
                              source={{ uri: 'https://blog.fluxair.com.br/wp-content/uploads/2020/11/casal-feliz-exercicio.jpg', }}
                         />
                    </View>
                    
               <Options navigation={navigation} />

               </View>


               <Button
                    title="Home"
                    onPress={() => {
                         navigation.navigate('Home')
                    }}
               />
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          justifyContent: 'center',
          alignItems: 'center',
     },
     backgroundTitle: {
          backgroundColor: 'black',
          width: '100%',
     },   
     title: {
          fontSize: 20,
          fontWeight: 'bold',
          paddingTop: 10,
          textAlign:'center',
          color: 'white'
     },
     paragraph: {
          fontSize: 14,
          padding: 10,
          textAlign: 'center',
          color: 'black'
     },
     backgroundParagraph: {
          backgroundColor: '#D3D3D3',
          borderRadius: 10,
          margin: 5
     },
     logo: {
          width: 135,
          height: 135,
     },
     backgroundLogo: {
          borderWidth: 10,
          borderRadius: 7
     }
})
