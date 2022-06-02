import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ButtonUser = ({navigation}) => {
  return (
  <TouchableOpacity onPress={() => navigation.navigate('Promoção')}>
          <Icon name='user' size={25} color='orange'/>
      </TouchableOpacity>
      )
}

export default ButtonUser;