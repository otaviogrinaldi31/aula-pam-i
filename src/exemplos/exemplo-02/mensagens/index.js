import { View, Text } from "react-native";

import styles from "./styles";

function Mensagens() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Título</Text>
        <Text style={styles.mensagem}>Mensagem</Text>
    </View>
  );
}

export default Mensagens;