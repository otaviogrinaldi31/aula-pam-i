import { StyleSheet } from 'react-native'; 
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'darkslategrey', 
      height: RFValue(56), 
      justifyContent: 'center', 
      borderRadius: RFValue(10), 
      marginTop: RFValue(20), 
      width: '22%', 
    }, 
    buttonTouch: {
        backgroundColor: '#fff', 
    }, 
    textButton: {
      fontSize: RFValue(28), 
      color: '#fafafa', 
      textAlign: 'center', 
    }, 
    zero: {
        width: '100%',
    },
  });
  
  export default styles;