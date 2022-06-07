import React, {useRef, useState} from 'react';
import { View, TouchableOpacity, Text, Image, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import { styles } from '../../../style'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const CarouselCards = () => {

    const carouselRef = useRef(null);

    const [lista, setLista] = useState([
        {
          title: 'Frios',
          text: 'Promoção',
          img: 'https://www.infovarejo.com.br/novo/wp-content/uploads/2017/08/Frios-e-latic%C3%ADnios-740x360-768x373.jpg',
        },

        {
          title: 'Açougue',
          text: 'Promoção',
          img: 'https://i0.wp.com/blog.bluesoft.com.br/wp-content/uploads/2019/06/importancia-erp-acougue.png?resize=1200%2C640&ssl=1',
        },

        {
          title: 'Biscoitos',
          text: 'Promoção',
          img: 'https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2021/12/m-dias-branco-banner-noticias_70-anos-de-piraque_final-2-1.jpg?w=806&ssl=1',
        },

        {
          title: 'Padaria',
          text: 'Promoção',
          img: 'https://extra.globo.com/incoming/24145466-5af-086/w640h360-PROP/padaria_extra.jpg',
        },

        {
          title: 'Bebidas',
          text: 'Promoção',
          img: 'https://labsnews.com/pt-br/wp-content/uploads/sites/5/2022/01/bebidas-800x400.jpg',
        },
      ]);

      const _renderItem = ({ item, index, navigation, }) => {
          return(
              <View style={{margin:10, marginTop:50,}}>
                <TouchableOpacity  style={styles.carousel}>
                <Image style={styles.carouselImg} source={{uri: item.img}}/>
                <Text style={styles.carouselText}>{item.title}</Text>
                </TouchableOpacity>
              </View>
          )
      };

  return (
    <View>
        <TouchableOpacity>
          <Carousel
          ref={carouselRef}
          data={lista}
          renderItem={_renderItem}
          sliderWidth={500}
          itemWidth={300}
          inactiveSlideOpacity={0.5}
          />
        </TouchableOpacity>
    </View>
  )
}

export default CarouselCards;