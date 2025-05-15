import { StyleSheet } from 'react-native'; 
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({ 
    txtEntrada: {
      borderWidth: RFValue(4), 
      textAlign: 'center', 
      fontSize: RFValue(20), 
      borderColor: '#708090', 
      color: 'darkslategrey', 
      borderRadius: RFValue(10),  
      padding: RFValue(10)
    },  
    txtTotal: {
        color: '#708090', 
        fontWeight: 'bold', 
    }, 
  });
  
  export default styles;