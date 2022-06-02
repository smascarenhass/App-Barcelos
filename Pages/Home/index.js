import * as React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import ButtonMarket from '../../Components/Buttons/ButtonMarket';
import Titulo from '../../Components/Titulo';
import { styles } from '../../style';
import CarouselCards from './Components/CarouselCards';
import Icon from 'react-native-vector-icons/AntDesign';


function Home ({navigation}){
  return <View>

      <View style={styles.header}>

      <ButtonMarket/>
      <Titulo/>
      
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Icon name='user' size={25} color='orange'/>
      </TouchableOpacity>

    </View>

    <View style={styles.main}>
      
    <Button title='Promoção do dia' onPress={() => navigation.navigate('Promoção')}/>

      <CarouselCards/>
    </View>


  </View>
}

export default Home;