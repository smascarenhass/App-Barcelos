import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../style';
import Icon from 'react-native-vector-icons/AntDesign';
import Buttoncorredor from '../../Components/ButtonsCorredores/Buttoncorredor';



function Corredores ({ navigation }){
  return <View style={{backgroundColor:'black',}}>

      <View style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
      }}>

        <Text style={{
          color:'orange',
          marginTop: 30,
          marginBottom: -20,
          marginLeft: 10,
          fontWeight: 'bold',
          fontSize: 18,
          }}>
            Em qual corredor deseja ir?
            </Text>

      <TouchableOpacity 
      style={{margin: 10, marginBottom: -30,}}
       onPress={() => navigation.navigate('Perfil')}>
          <Icon name='user' size={25} color='orange'/>
      </TouchableOpacity>

    </View>

    <View style={styles.main}>
      


          <Buttoncorredor/>

    </View>


  </View>
}

export default Corredores;