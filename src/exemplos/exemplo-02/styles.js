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
    height:80, //largura do elemento   
    textAlign: 'center',  //  alinhamento horizontal
    textAlignVertical: 'center', // alinhamento vertical
    color: 'black',// cor do texto
    backgroundColor: 'darkslategrey', // cor de fundo
    borderRadius: 20,  //   bordas arredondadas
  },
  imagem: {
   // height: RFPercentage(16), //altura da imagem
   // width: RFPercentage(48), //largura da imagem
   width:'90%', //largura da imagem
   resizeMode: 'contain', //redimensionamento
  },

});

export default styles;