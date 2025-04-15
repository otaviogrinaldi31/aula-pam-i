import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcccc",
    padding: 16,
    alignItems: "center",
  },
  titulo: {
    fontSize: RFPercentage(4),
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: 'darkred',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: RFPercentage(2.5),
    color: 'darkred',
    textAlign: 'center',
    marginBottom: 20,
  },
  nomeCompleto: {
    fontSize: RFPercentage(4), // AUMENTADO!
    color: 'darkred',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: RFPercentage(3), // AUMENTADO!
    color: 'black',
    alignSelf: 'flex-start',   // ALINHADO À ESQUERDA!
    marginLeft: '5%',
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  TxtInput: {
    borderWidth: 1,
    borderColor: 'darkred',
    color: 'darkred',
    fontSize: RFPercentage(2.2),
    width: '90%',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: 'red',
    width: '75%',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  txtBotao: {
    fontSize: RFPercentage(2.2),
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
