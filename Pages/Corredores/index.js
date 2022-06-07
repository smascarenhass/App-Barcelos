import * as React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../style';
import Icon from 'react-native-vector-icons/AntDesign';



function Corredores ({ navigation }){
  return <View style={{backgroundColor:'black',}}>

      <View style={styles.header}>

        

      <TouchableOpacity 
      style={{
        marginTop:20,
         marginBottom:-30,
          marginLeft:300,}}
       onPress={() => navigation.navigate('Perfil')}>
          <Icon name='user' size={25} color='orange'/>
      </TouchableOpacity>

    </View>

    <View style={styles.main}>
      

    </View>


  </View>
}

export default Corredores;