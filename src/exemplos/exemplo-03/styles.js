import { StyleSheet } from "react-native"; 

import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1, // container ocupa % da tela
    backgroundColor: "#fafafa", // cor de fundo
    borderRadius: 5, // bordas arredondadas
    padding: 8,
    alignItems: "center", // alinhamento horizontal
  },
  titulo: {
    fontSize: RFPercentage(4), //tamanho da fonte
    borderWidth: 3, //expessura da borda	
    marginTop: 20,  // margem acima do elemento
    marginBottom: 20,  //margem acima do elemento
    //padding: 8,   //espaçamento interno
    width: '100%',  //altura do elemento
    height:80,   //largura do elemento
    textAlign: 'center',  //alinhamento de texto
    textAlignVertical: 'center', //alinhamento vertical
    color: 'black', //cor do texto
    backgroundColor: 'darkslategrey', //cor de fundo
    borderRadius: 20,  //bordas arredondadas
  },
  texto:{
    fontSize: RFPercentage(2.2), //tamanho da fonte
    
  },
  botaoAlert: {
    with: '75%',
    margin: RFPercentage(2),
  },

  valor: {
    color:'darkslategrey',
    fontSize: RFPercentage(4),
  },

  botao: {
    backgroundColor: 'darkslategrey',
    width: '75%',
    borderRadius: RFPercentage(2),
    padding: RFPercentage(1),
    alignItems: 'center',
    justifyContent: 'center',
    margin: RFPercentage(2),
  },
  txtBotao: {
    fontSize: RFPercentage(2),
    color: '#fafafa',
  }

});

export default styles;