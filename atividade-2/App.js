import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

// IMPORTS
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Disciplina from './components/Disciplina';

// APP
export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome="Álisson" curso="Design Digital"/>
      <Corpo/>
      <Disciplina disciplina = "Empreendedorismo"/>
      <Disciplina disciplina = "Design e Inovação"/>
      <Disciplina disciplina = "PIWEB"/>
      <StatusBar style="auto" />
    </View>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
