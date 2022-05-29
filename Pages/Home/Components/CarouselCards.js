import React, {useRef, useState} from 'react';
import { View, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel'

const CarouselCards = () => {

    const carouselRef = useRef(null);

    const [lista, setLista] = useState([
        {
          title: 'Frango',
          text: 'Promoção',
        },
      ]);

      const _reanderItem = ({ item, index }) => {
          return(
              <View>
                <TouchableOpacity>
                  
                </TouchableOpacity>
              </View>
          )
      };

  return (
    <View>
        <Carousel
        ref={carouselRef}
        data={lista}
        renderItem={_reanderItem}
        sliderWidth={500}
        itemWidth={200}
        inactiveSlideOpacity={0.5}
        />
    </View>
  )
}

export default CarouselCards;