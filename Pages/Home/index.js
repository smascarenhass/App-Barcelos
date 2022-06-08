import * as React from 'react';
import { View, Button, TouchableOpacity, ScrollView } from 'react-native';
import Titulo from '../../Components/Titulo';
import { styles } from '../../style';
import CarouselCards from './Components/CarouselCards';
import Icon from 'react-native-vector-icons/AntDesign';


function Home ({navigation}){
  return(
    <ScrollView style={{backgroundColor: '#14140F'}}>
      <View>

        <View style={styles.header}>

            <TouchableOpacity onPress={() => navigation.navigate('Corredores')}>
                <Icon name='shoppingcart' color='orange' size={25}/>
          </TouchableOpacity>

          <Titulo/>

          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
              <Icon name='user' size={25} color='orange'/>
          </TouchableOpacity>

          </View>

          <View style={styles.main}>

          <View style={{
            padding: 10,
            backgroundColor:'#053D38',
            borderColor: '#A3CCAB',
            borderRadius: 5,
            borderWidth: 2,
          }}>
            <Button color={'#053D38'} title='Promoções do dia' onPress={() => navigation.navigate('Promoções')}/>
          </View>

          <CarouselCards/>
        </View>


      </View>
    </ScrollView>
  );
}

export default Home;