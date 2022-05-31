import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import style, { styles } from '../../style';

const ButtonPromotion = () => {
  return (
    <TouchableOpacity style={styles.ButtonPromotion}>
        <Text style={{fontWeight: 'bold', fontSize: 20,}}>Promoção do dia</Text>
    </TouchableOpacity>
  );
}

export default ButtonPromotion;