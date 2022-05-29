import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const ButtonUser = () => {
  return (
  <TouchableOpacity>
          <Icon name='user' size={25} color='orange'/>
      </TouchableOpacity>
      )
}

export default ButtonUser;