import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

export default (props) => {
     return (
          <View>
               <Text style={styles.txtGrande}>
                    O nome do aluno é {props.nome}
               </Text>

               <Text style={styles.txtGrande}>
                    O curso do aluno é {props.curso}
               </Text>
          </View>
          
     )
}


const styles = StyleSheet.create({
     txtGrande : {
          fontSize : 16,
     }
})