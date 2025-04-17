import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

// Exemplos
import Exemplo01 from './src/exemplos/exemplo-01';
import Exemplo02 from './src/exemplos/exemplo-02';
import Exemplo03 from './src/exemplos/exemplo-03';
import Exemplo04 from './src/exemplos/exemplo-04';
import Exemplo05 from './src/exemplos/exemplo-05';

//Atividades
import Atividade01 from './src/atividades/atividades-01';
import Atividade02 from './src/atividades/atividade-02';
import Atividade03 from './src/atividades/atividades-03';
import Atividade04 from './src/atividades/atividades-04';


export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo05 />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 8,
    marginTop: Constants.statusBarHeight || 8, 
  },
});
