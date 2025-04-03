import { View, Text, Button, Alert } from "react-native";

import styles from "./styles";
function Exemplo03() {

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
    </View>
  );
}

export default Exemplo03;