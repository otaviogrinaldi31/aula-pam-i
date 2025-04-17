import { StyleSheet } from "react-native"; 

import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    backgroundColor: 'darkslategray', 
    padding: 8,
  },
  titulo: {
    margin: 6,
    fontSize: RFPercentage(18), //tamanho da fonte
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',

  },

});

export default styles;