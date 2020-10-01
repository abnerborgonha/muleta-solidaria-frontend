import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Signature from 'react-native-signature-canvas';
// import { Container } from './styles';

const Sing = () => {
  const [signature, setSign] = useState(null);
 
  function handleSignature (signature)  {
    console.log(signature);
    setSign(signature);
  };
 
  function handleEmpty () {
    console.log('Empty');
  }
 
  const style = `.m-signature-pad--footer
    .button {
      background-color: #1190CB;
      color: #FFF;
    }`;

  return (
    <View style={{ flex: 1,  }}>
      <Text>Eu aceito todos os termos e condições ques estão aqui propostos</Text>
      <Text style={styles.previewText}> Assinado: </Text>
      <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={"stretch"}
            style={{ width: 200, height: 100 }}
            source={{ uri: signature }}
          />
        ) : null}
      </View>
      <Signature
        onOK={handleSignature}
        onEmpty={handleEmpty}
        descriptionText="Sua assinatura aqui"
        clearText="Limpar"
        confirmText="Confirmar"
        webStyle={style}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  preview: {
    width: 335,
    height: 50,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10
  }
});

export default Sing;