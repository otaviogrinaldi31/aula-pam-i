import { StyleSheet } from 'react-native'; 
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', 
      backgroundColor: '#fafafa',
      padding: RFValue(8), 
      width: '100%', 
      borderRadius: RFValue(20), 
    },
    titulo: {
      margin: RFValue(6),
      fontSize: RFValue(28),
      fontWeight: 'bold',
      textAlign: 'center', 
      color: 'darkslategrey', 
    },
    txtSaida: {
      margin: RFValue(6), 
      fontSize: RFValue(20), 
      fontWeight: 'bold', 
      textAlign: 'center', 
      color: 'darkslategrey',     
    },  
    textLabel: {
      fontSize: RFValue(15), 
      fontWeight: 'bold', 
      color: '#708090',     
    }, 
    ladoAlado: {
        flexDirection: 'row',       
        justifyContent: 'space-between'  
    }
  });
  
  export default styles;