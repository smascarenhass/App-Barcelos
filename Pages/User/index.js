import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from '../../style';

const User = (props) => {

  const Usuario = (props) => {
    return (
      <View>
        <Text style={{fontWeight:'bold',}}>Nome: {props.name}</Text>
        <Text style={{fontWeight:'bold',}}>CPF: {props.cpf}</Text>
        <Text style={{fontWeight:'bold',}}>Endereço: {props.endereço}</Text>
      </View>
    )
  };

  return(
    <ScrollView style={{flexDirection:'column',}}>
      <View style={styles.center}>

        <Image style={{
          borderColor:'orange',
          borderWidth: 5,
          width: 150,
          height: 150,
          borderRadius: 50,
          marginTop: 20,
          margin: 10,
          }} source={{uri:'https://github.com/smascarenhass.png'}}/>
      </View>

      <View style={{marginLeft: 10, marginTop: 30,}}>
        <Usuario name='Luiz Otávio dos Santos Mascarenhas'
        cpf='192.956.167.90'
        endereço='rua Rio de Janeiro'
        />
      </View>

    </ScrollView>
  )
}

export default User;