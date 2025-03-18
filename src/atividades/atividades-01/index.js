import { View, Text } from "react-native";

import styles from "./styles";
function Atividade01() {
return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Atividade 01</Text>

        <Text style={styles.texto}>Aula PAM I, primeiro componete.</Text>

        <Text style={styles.aula}>
          ------PRIMERA AULA DE MOBILE ATIVIDADE!!!!-------
            {"\n"}O Impacto do Mobile{"\n"} Os dispositivos móveis mudaram a forma como vivemos, tornando a comunicação e o acesso à informação mais rápidos. Aplicativos facilitam tarefas diárias, desde pagamentos até entretenimento.
            Com avanços como 5G e inteligência artificial, o mobile continua evoluindo, tornando-se cada vez mais essencial no dia a dia. O futuro promete mais inovação e conectividade.📱🚀
        </Text>

        <Text style={styles.aula2}>☠</Text>
        <Text style={styles.aula3}>Playstation é melhor que Xbox!</Text>

    </View>
);
}

export default Atividade01;