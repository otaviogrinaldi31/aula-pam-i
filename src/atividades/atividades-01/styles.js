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
    fontWeight: 'bold', // negrito
  },
  texto:{
    fontSize: RFPercentage(2.2), //tamanho da fonte
    
  },

  aula: {
    fontSize: RFPercentage(2.2),
    marginTop: 20,  // margem acima do elemento
    marginBottom: 20,  //margem acima do elemento
    padding: 8,   //espaçamento interno
    width: '100%',  //altura do elemento
    color: 'black', //cor do texto
    
    
  },

  aula2: {
    fontSize: RFPercentage(6), //tamanho da fonte
    borderWidth: 3, //expessura da borda	
    marginTop: 20,  // margem acima do elemento
    marginBottom: 20,  //margem acima do elemento
    //padding: 8,   //espaçamento interno
    width: '50%',  //altura do elemento
    height:80,   //largura do elemento
    textAlign: 'center',  //alinhamento de texto
    textAlignVertical: 'center', //alinhamento vertical
    color: 'black', //cor do texto
    backgroundColor: '#fafafa', //cor de fundo
    borderRadius: 20,  //bordas arredondadas
    fontWeight: 'bold', // negrito
  },

  aula3: {
    fontSize: RFPercentage(3),
    color: 'blue',
  }
});

export default styles;