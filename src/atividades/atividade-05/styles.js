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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
    marginTop: RFPercentage(2),
  },
  operationButton: {
    backgroundColor: 'black',
    width: '22%',
    borderRadius: RFPercentage(3.5),
    paddingVertical: RFPercentage(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  operationButtonText: {
    color: 'violet',
    fontSize: RFPercentage(2.5),
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: 'red',
    width: '75%',
    borderRadius: RFPercentage(3.5),
    padding: RFPercentage(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFPercentage(2),
  },
  clearButtonText: {
    color: 'white',
    fontSize: RFPercentage(2.5),
    fontWeight: 'bold',
  },
});

export default styles;
