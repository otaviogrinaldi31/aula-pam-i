import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import styles from "./styles";

function Atividade04() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');

  const handleExibirNomeCompleto = () => {
    setNomeCompleto(`${nome} ${sobrenome}`);
    setNome('');
    setSobrenome('');
    Keyboard.dismiss(); // Isso fecha o teclado após clicar no botão
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 4</Text>

      {nomeCompleto === '' ? (
        <Text style={styles.subtitulo}>Inserir o nome e sobrenome</Text>
      ) : (
        <Text style={styles.nomeCompleto}>{nomeCompleto}</Text>
      )}

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.TxtInput}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={(texto) => {
          setNome(texto);
          setNomeCompleto('');
        }}
      />

      <Text style={styles.label}>Sobrenome</Text>
      <TextInput
        style={styles.TxtInput}
        placeholder="Digite seu sobrenome"
        value={sobrenome}
        onChangeText={(texto) => {
          setSobrenome(texto);
          setNomeCompleto('');
        }}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={handleExibirNomeCompleto}
      >
        <Text style={styles.txtBotao}>Exibir texto</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Atividade04;
