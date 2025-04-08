import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    borderRadius: 5,
    padding: 8,
    alignItems: "center",
    justifyContent: "center", // centraliza verticalmente também
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
    color: 'black',
    backgroundColor: 'darkslategrey',
    borderRadius: 20,
  },
  valor: {
    color: 'darkslategrey',
    fontSize: RFPercentage(4),
    marginHorizontal: RFPercentage(2),
  },
  linhaControles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: RFPercentage(3),
  },
  botao: {
    backgroundColor: 'darkslategrey',
    borderRadius: RFPercentage(2),
    padding: RFPercentage(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    margin: RFPercentage(1.5),
  },
  botaoQuadrado: {
    width: 60,
    height: 60,
  },
  botaoZerar: {
    width: 200,
    borderRadius: 50,
    paddingVertical: RFPercentage(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkslategrey',
  },
  txtBotao: {
    fontSize: RFPercentage(2.5),
    color: '#fafafa',
  }
});

export default styles;
