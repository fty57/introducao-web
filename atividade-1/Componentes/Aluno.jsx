import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';



function Aluno(){
        return (
                <View  style={styles.container}>
                    <Text style={styles.name}>
                        Francisco Álisson Véras Damasceno
                    </Text>
        
                    <Text style={styles.pink}>
                        Idade: 20
                    </Text>
        
                    <Text style={styles.city}>
                        Piripiri - PI
                    </Text>
        
                    <Text style={styles.red}>
                        Design Digital
                    </Text>

                    <Image source={require('./fox.jpg')} style={{width:100, height:100}} />

                    <Text>
                        Hobby: Desenvolver, Jogar e Estudar Economia
                    </Text>
                    <Text>
                        Expectativas: Aprender uma nova tecnologia.
                    </Text>
                </View>  

        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },


    red : {
        color: "red",
        textDecorationLine : "underline",
    },
    pink: {
        color: "#ffb6c1"
    },

    name : {
        fontWeight: "bold",
        fontSize: 20
    },

    city : {
        fontStyle: "italic",
    }
  });


export default Aluno;