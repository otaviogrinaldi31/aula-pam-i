import { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";
function Exemplo04() {

  const [txtDigitado, setTxtDigitado] = useState("");
  const [valorVisualizado, setValorVisualizado] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 4</Text>
      <Text style={styles.texto}>{txtDigitado}</Text>

      <TextInput style={styles.TxtInput} 
      onChangeText ={(valorTxtInput) => setTxtDigitado(valorTxtInput)}
      />

        <Text style={styles.titulo}>Exemplo exibição valor digitado por botão</Text>
        <Text style={styles.texto}>{valorVisualizado}</Text>

        <TouchableOpacity 
        style={styles.botao}
        onPress={() => setValorVisualizado(txtDigitado)}
        >

          <Text style={styles.txtBotao}>Visualizar valor digitado</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Exemplo04;