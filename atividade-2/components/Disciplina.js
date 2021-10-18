import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

export default ({disciplina}) =>{
     return (
          <View>
               <Text style={styles.txtGrande}>
                    O aluno está matriculado em {disciplina}
               </Text>
          </View>
     )
}

const styles = StyleSheet.create({
     txtGrande : {
          fontSize : 16,
     }
})