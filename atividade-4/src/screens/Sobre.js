import React from 'react'
import { Text, View, Button, Image, StyleSheet } from 'react-native'

import Options from '../components/Options'


export default ({ navigation }) => {
     return (
          <View>
               <View>
                    <Text>Details and Information</Text>
                    <Text>
                         Lorem ipsum dolor lorem dolor sit amet, consectetur adipiscing el Lorem ipsum dolor lorem dolor sit amet, consectetur adipiscing el Lorem ipsum dolor lorem dolor sit amet, consectetur adipiscing el Lorem ipsum dolor lorem dolor sit amet, consectetur adipiscing el Lorem ipsum dolor lorem dolor sit amet, consectetur adipiscing el
                    </Text>
                    <Image />
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


