import { Text, Pressable } from 'react-native'; 

import Formula from '../formula';

import styles from './styles';

export default function Botao({ children, n1, n2, atualizaTotal, onPress }) { 

    function handleCalcula() {
        if (onPress) {
            onPress();
        } else {
            const resultado = Formula(children, n1, n2); 
            atualizaTotal(resultado);
        }        
    }

    return (
        <Pressable
            onPress={() => handleCalcula()}
            style={
                ({ pressed }) => pressed ?
                    [styles.button, children === 'Zerar' ? styles.zero : null, styles.buttonTouch]
                    :
                    [styles.button, children === 'Zerar' ? styles.zero : null]
            }
        >
            <Text style={styles.textButton}>{children}</Text>
        </Pressable>
    );
}