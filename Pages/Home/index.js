import * as React from 'react';
import { View, Text } from 'react-native';
import ButtonMarket from '../../Components/Buttons/ButtonMarket';
import ButtonUser from '../../Components/Buttons/ButtonUser';
import Titulo from '../../Components/Titulo';
import { styles } from '../../style';
import CarouselCards from './Components/CarouselCards';


// import { Container } from './styles';

const Home = () => {
  return <View>

      <View style={styles.header}>

      <ButtonMarket/>
      <Titulo/>
      <ButtonUser/>

    </View>

    <View>
      <CarouselCards/>
    </View>

  </View>
}

export default Home;