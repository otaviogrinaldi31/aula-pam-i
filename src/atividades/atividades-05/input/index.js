import { useState } from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

export default function Input({ onChangeText, value, total }) { 

    const [isFocus, setIsFocus] = useState(false);

    return (
        <TextInput
            style={
                [
                    styles.txtEntrada, 
                    total ? styles.txtTotal : null, 
                    isFocus ?
                        {
                            borderColor: 'darkslategrey',
                            outline: 'none',
                        }
                        :
                        {}
                ]
            }
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChangeText={(n) => onChangeText(n)} 
            readOnly={total ? true : false}
            value={value}
        />
    );
}