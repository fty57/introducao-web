import React from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native'

import Options from '../components/Options'


export default ({ navigation }) => {
     return (
          <View>
               <View style={styles.container}>
                    <View style={styles.backgroundTitle}>
                         <Text style={styles.title}>O que era um bobo da corte?</Text>
                    </View>


                    <View style={styles.backgroundParagraph}>
                         <Text style={styles.paragraph}>
                              O bobo da corte era um artista contratado pelas cortes europeias na Idade Média para divertir os reis e seu séquito. Como um palhaço, era considerado cômico e muitas vezes desagradável, por apontar de forma grotesca os vícios e as características da sociedade.
                         </Text>
                    </View>
                    <View style={styles.backgroundLogo}>
                         <Image
                              style={styles.logo}
                              source={{ uri: 'https://i.pinimg.com/564x/62/d7/12/62d71229571d05c032a68fb38b774106.jpg', }}
                         />
                    </View>

               </View>

               <Options />

               <Button
                    title="Home"
                    onPress={() => {
                         navigation.goBack();
                    }}
               />
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'gray'
     },
     backgroundTitle: {
          backgroundColor: 'pink',
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
          color: '#FFF'
     },
     backgroundParagraph: {
          backgroundColor: 'black',
          borderRadius: 10,
          margin: 5
     },
     logo: {
          width: 200,
          height: 200,
     },
     backgroundLogo: {
          padding: 10,
          backgroundColor: 'pink',
          borderWidth: 10,
          borderRadius: 7
     }
})
