import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CardsProducts from '../../Components/CardsProducts';

// import { Container } from './styles';

const Promotion = () => {
  return(
    <ScrollView style={{flexDirection:'column',}}>
      <View style={{flexDirection: 'row',}}>
        <CardsProducts name='Carne'  price='39,99'/>
        <CardsProducts name='Frango' price='27,89'/>
        <CardsProducts name='Vinho' price='18,99'/>
      </View>

      <View style={{flexDirection: 'row',}}>
        <CardsProducts name='Carré'/>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
      </View>

      <View style={{flexDirection: 'row',}}>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
      </View>

      <View style={{flexDirection: 'row',}}>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
      </View>

      <View style={{flexDirection: 'row',}}>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
      </View>

      <View style={{flexDirection: 'row',}}>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
      </View>

      <View style={{flexDirection: 'row',}}>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
      </View>

      <View style={{flexDirection: 'row',}}>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
      </View>

      <View style={{flexDirection: 'row',}}>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
        <CardsProducts name='Carne'/>
      </View>
      
    </ScrollView>
  )
}

export default Promotion;