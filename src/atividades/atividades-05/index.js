import { useState } from 'react';
import { View, Text } from 'react-native'; 

import Input from './input'; 
import Botao from './botao';

import styles from './styles';

export default function Atividade5() {

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    function handleZerar() {
        setN1(0);
        setN2(0);
        setTotal(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1º número </Text>
            <Input onChangeText={setN1} value={n1} />

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textLabel}> 2º número </Text>
            <Input onChangeText={setN2} value={n2} />

            <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <Input value={parseFloat(total).toFixed(2)} total />

            <View style={styles.ladoAlado}>
                <Botao n1={n1} n2={n2} atualizaTotal={setTotal}>+</Botao>        
                <Botao n1={n1} n2={n2} atualizaTotal={setTotal}>-</Botao>        
                <Botao n1={n1} n2={n2} atualizaTotal={setTotal}>*</Botao>        
                <Botao n1={n1} n2={n2} atualizaTotal={setTotal}>/</Botao>        
            </View>   

            <Botao onPress={handleZerar}>Zerar</Botao>         

        </View>
    );
}