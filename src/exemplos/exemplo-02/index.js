import { View, Text, Image } from "react-native";

import styles from "./styles";

import img from '../../../assets/002-1-react-native.png';
import Mensagens from "./mensagens";

function Exemplo02() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 02</Text>
      <Image source={img} style={styles.imagem} />
      <Mensagens />
    </View>
  );
}

export default Exemplo02;