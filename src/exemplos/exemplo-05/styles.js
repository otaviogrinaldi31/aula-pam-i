import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 8,
    alignItems: 'center',
  },
  titulo: {
    fontSize: RFPercentage(4),
    borderWidth: 3,
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 80,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'red',
    borderColor: 'red',
    borderRadius: 20,
  },
  texto: {
    fontSize: RFPercentage(2.2),
    marginTop: RFPercentage(1),
    marginBottom: RFPercentage(0.5),
  },
  txtInput: {
    borderWidth: RFPercentage(0.4),
    borderColor: 'red',
    color: 'violet',
    fontSize: RFPercentage(2.2),
    width: '90%',
    borderRadius: RFPercentage(2),
    marginVertical: RFPercentage(1.5),
    padding: RFPercentage(1),
  },
  txtBotao: {
    backgroundColor: 'black',
    width: '75%',
    borderRadius: RFPercentage(3.5),
    padding: RFPercentage(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFPercentage(2),
  },
  txtBotaoTexto: {
    color: 'violet',
    fontSize: RFPercentage(2.5),
    fontWeight: 'bold',
  },
  operatorBox: {
    borderWidth: RFPercentage(0.4),
    borderColor: 'red',
    padding: RFPercentage(1),
    borderRadius: RFPercentage(2),
    marginVertical: RFPercentage(1.5),
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  operatorText: {
    color: 'violet',
    fontSize: RFPercentage(2.5),
  },
  operatorOptions: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'red',
    width: '30%',
    top: RFPercentage(9),
    paddingVertical: RFPercentage(1),
    alignItems: 'center',
    borderRadius: RFPercentage(2),
  },
  operatorOption: {
    paddingVertical: RFPercentage(1),
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;