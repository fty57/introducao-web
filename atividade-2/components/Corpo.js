import React from 'react';
import {Image, StyleSheet} from 'react-native'

export default () => {
     let pic = {
          uri: "https://i.ibb.co/C20qPqg/Whats-App-Image-2021-10-11-at-4-41-03-PM.jpg"
     }
     return(
          <Image source={pic} style={styles.photoEditor} />
     )
}

const styles = StyleSheet.create({
     photoEditor: {
          width: 250, 
          height: 250, 
          borderRadius: 125,
          margin: 25
     }
})