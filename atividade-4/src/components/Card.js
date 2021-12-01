import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default ({title}) => {
     return(
          <View style={styles.backgroundTitle}>
               <Text style={styles.title}>{title}</Text>
          </View>
     )
}

const styles = StyleSheet.create({
     backgroundTitle: {
          width: '100%',
          height: 100,
          backgroundColor: 'gray'
     },
     title: {
          color: 'white',
          fontSize: 30,
          alignSelf: 'center',
          marginTop: 25
     }
})