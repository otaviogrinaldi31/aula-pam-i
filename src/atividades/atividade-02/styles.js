import { StyleSheet } from "react-native"; 
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fafafa", 
    borderRadius: 5, 
    padding: 8,
    alignItems: "center", 
  },
  titulo2: {
    fontSize: RFPercentage(4), 
    borderWidth: 3, 
    marginTop: 20,  
    marginBottom: 20,  
    width: '100%',  
    height: 80,   
    textAlign: 'center',  
    textAlignVertical: 'center', 
    color: 'black',
    backgroundColor: 'darkslategrey', 
    borderRadius: 20,  
  },
  
});

export default styles;