import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

// import { Container } from './styles';

const ButtonMarket = () => {
  return (
    <TouchableOpacity>
    <Icon name='shoppingcart' color='orange' size={25}/>
    </TouchableOpacity>
  );
}

export default ButtonMarket;