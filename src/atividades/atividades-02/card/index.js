import { View, Text, Image } from "react-native";
import styles from "./styles";

function Card({ titulo2, descricao, img }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={img} style={styles.imagem} />
      <View style={styles.textContainer}>
        <Text style={styles.titulo}>{titulo2}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
      </View>
    </View>
  );
}

export default Card;
