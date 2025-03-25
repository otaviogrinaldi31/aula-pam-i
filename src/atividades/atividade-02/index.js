import { View, Text, Image } from "react-native";

import styles from "./styles";
import Card from "./card";

import img from '../../../assets/thelast.png';
import img from '../../../assets/re5.png';
import img from '../../../assets/Red.png';


function Atividade02() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atividade 02</Text>
      <Card titulo="The Last of Us" descricao="." img={img} />
        

      </View>
  );
}

export default Atividade02;