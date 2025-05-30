import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';  // Importando os estilos

function Exemplo05() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [total, setTotal] = useState('');
  const [operator, setOperator] = useState('+');  // Estado para armazenar o operador
  const [isOperatorOpen, setIsOperatorOpen] = useState(false);  // Estado para controlar se a seleção do operador está aberta

  const handleCalculation = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result;

    switch (operator) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n1 / n2;
        break;
      default:
        result = 0;
        break;
    }

    setTotal(result.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 5</Text>

      <Text style={styles.texto}>Calculadora básica</Text>

      <Text style={styles.texto}>1º número</Text>
      <TextInput
        style={styles.txtInput}
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.operatorBox}
        onPress={() => setIsOperatorOpen(!isOperatorOpen)} // Abre ou fecha a seleção de operador
      >
        <Text style={styles.operatorText}>{operator}</Text>
      </TouchableOpacity>

      {isOperatorOpen && (
        <View style={styles.operatorOptions}>
          {['+', '-', '*', '/'].map((op) => (
            <TouchableOpacity
              key={op}
              style={styles.operatorOption}
              onPress={() => {
                setOperator(op);
                setIsOperatorOpen(false); // Fecha a seleção após escolher um operador
              }}
            >
              <Text style={styles.operatorText}>{op}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <Text style={styles.texto}>2º número</Text>
      <TextInput
        style={styles.txtInput}
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
      />

      <Text style={styles.texto}>=</Text>

      <Text style={styles.texto}>Total</Text>
      <TextInput
        style={styles.txtInput}
        value={total}
        editable={false}
      />

      <TouchableOpacity style={styles.txtBotao} onPress={handleCalculation}>
        <Text style={styles.txtBotaoTexto}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Exemplo05;