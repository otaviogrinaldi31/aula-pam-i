import { useState} from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from "react-native";

import styles from "./styles";
function Exemplo03() {

  const [numero, setNumero] = useState(0);
  

  function heandIncrementa(){
    setNumero(numero + 1);
  }

  function heandExibeBotao(){
    Alert.alert('Alerta', 'Alguém clicou no botão!');
  }
  const heandExibeBotao2 = () => {
    Alert.alert('Alerta', 'Alguém clicou no botão!'
    , [
      {
        text: 'Sim',
        onPress: () => alert('Mensagem', 'Clicou em sim'),
        style: 'default',
      },
      {
        text: 'Não',
        onPress: () => alert('Clicou em não'),
        style: 'default',
      },
      {
        text: 'Cancelar',
        onPress: () => alert('Clicou em cancelar'),
        style: 'default',
      },
  
    ]
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 03</Text>
      <Text style={styles.texto}>Variáveis e State</Text>
    <View style={styles.botaoAlert}>
      <Button
        title="Não clique"
        color={"red"}
        onPress={heandExibeBotao2} 
        />
        </View>
        <Text style={styles.valor}>{numero}</Text>
        <TouchableOpacity style={styles.botao} onPress={heandIncrementa}>
          <Text style={styles.txtBotao}>+1</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Exemplo03;