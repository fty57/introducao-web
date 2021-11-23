import React from 'react'
import { Text, View, Button} from 'react-native'


export default ({navigation}) => {
     return (
          <View >
               <Text >Sobre</Text>
               <Button
                    title="Home"
                    onPress={() =>{
                         navigation.goBack();
                    }}
               />
          </View>
     )
}