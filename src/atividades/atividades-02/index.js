import { View, Text } from "react-native";

import styles from "./styles";
import Card from "./card";

import theLastImg from '../../../assets/thelast.png';
import re5Img from '../../../assets/re5.jpg';
import redImg from '../../../assets/red.png';

function Atividade02() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo2}>Atividade 02</Text>
      <Card 
        titulo2="The Last of Us" 
        descricao="Um jogo emocionante sobre sobrevivência e laços humanos. R$100,00" 
        img={theLastImg} 
      />
      <Card 
        titulo2="Resident Evil 5" 
        descricao="Ação e terror em uma jornada contra o bioterrorismo. R$70,00" 
        img={re5Img} 
      />
      <Card 
        titulo2="Red Dead Redemption" 
        descricao="Um épico do velho oeste com ação e uma história inesquecível. R$150,00" 
        img={redImg} 
      />
    </View>
  );
}

export default Atividade02;