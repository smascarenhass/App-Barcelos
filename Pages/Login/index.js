import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../../style';

const Login = () => {
    return (
    <ScrollView style={{backgroundColor: '#14140F'}}>

      <View>
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
                      Faça seu Login para aprofeitar nosso App!
                  </Text>

          </View>
     </View>

      <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: -30}}>
          <View style={styles.containerCadastro}>
              <View >
                
                <View style={{
                  backgroundColor:'#34675C', 
                  padding: 5,
                  paddingLeft: 50,
                  paddingRight: 50,
                  borderColor: '#A3CCAB',
                  borderRadius: 5,
                  borderWidth: 2,
                  }}>
                <TextInput 
                
                placeholder='Usuário'
                placeholderTextColor={'#fff'}
                />
                </View>
                
                <View style={{
                  marginTop: 10,
                  backgroundColor:'#34675C',
                  padding: 5,
                  paddingLeft: 50,
                  paddingRight: 50,
                  borderColor: '#A3CCAB',
                  borderRadius: 5,
                  borderWidth: 2,
                    }}>
                <TextInput 
                
                placeholder='Senha'
                placeholderTextColor={'#fff'}
                />
                </View>

                <TouchableOpacity style={{
                  backgroundColor: '#14140F', 
                  padding: 10, 
                  marginBottom: -30, 
                  marginTop: 50,
                  borderColor: '#A3CCAB',
                  borderRadius: 5,
                  borderWidth: 2,
                  alignItems: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Entrar</Text>
                </TouchableOpacity>
              </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default Login;