import React, {useRef, useState} from 'react';
import { View, TouchableOpacity, Text,Image } from 'react-native';
import Carousel from 'react-native-snap-carousel'
import { styles } from '../../../style'


const CarouselCards = () => {

    const carouselRef = useRef(null);

    const [lista, setLista] = useState([
        {
          title: 'Frios',
          text: 'Promoção',
          img: 'https://cdn.consumidormoderno.com.br/wp-content/uploads/2019/02/IMG_0350.jpg',
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
      ]);

      const _renderItem = ({ item, index }) => {
          return(
              <View style={{margin:10,}}>
                <TouchableOpacity style={styles.carousel}>
                <Image style={styles.carouselImg} source={{uri: item.img}}/>
                <Text style={styles.carouselText}>{item.title}</Text>
                </TouchableOpacity>
              </View>
          )
      };

  return (
    <View>
        <Carousel
        ref={carouselRef}
        data={lista}
        renderItem={_renderItem}
        sliderWidth={500}
        itemWidth={300}
        inactiveSlideOpacity={0.5}
        />
    </View>
  )
}

export default CarouselCards;