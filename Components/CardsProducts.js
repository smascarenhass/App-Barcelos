import React from 'react';
import { ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from '../style';

// import { Container } from './styles';

const CardsProducts = (props) => {

  return(
    <ScrollView style={{flexDirection:'column',}}>
      <TouchableOpacity style={styles.CardsProducts}>
        <Text
        style={{
          margin: 5,
          fontWeight:'bold',
        }}
        >{props.name}</Text>

        <Image style={{width:100, height: 100, margin: 5,}} source={{uri: 'https://imagenspng.com/wp-content/uploads/imagem-frango-no-prato-Imagem-png-com-fundo-removido-transparente-gratis-para-baixar-1536x807.png'}}/>

        <Text
        style={{
          margin: 5,
          fontWeight:'500',
        }}
        >R${props.price}</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default CardsProducts;