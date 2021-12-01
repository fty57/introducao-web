import React from 'react'
import { View, Text, Pressable, StyleSheet} from 'react-native'

export default ({ navigation}) => {
     return (
          <View style={styles.container}>
               <Pressable
                    style={[styles.button, styles.buttonBack]}
                    onPress={() => navigation.navigate('IMC')}
               >
                    <Text style={styles.textStyle}>Confira seu IMC</Text>
               </Pressable>
          </View>
     )
}
const styles = StyleSheet.create({
     container:{
          justifyContent: 'center',
          alignItems: 'center',
     },
     button: {
          borderRadius: 20,
          padding: 10,
          elevation: 2,
          width: '50%',
          margin: 20
     },
     buttonBack: {
          backgroundColor: "#696969",
     },
     textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
     },
})
