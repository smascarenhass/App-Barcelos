import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../../style';


const Cadastro = ({ navigation }) => {
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
                      Crie sua conta e torne-se nosso parceiro!
                  </Text>

          </View>
     </View>

      <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: -30}}>
          <View style={styles.containerCadastro}>
              <View>

              <View style={{alignItems:'center'}}>
                <Text style={{fontWeight:'bold', margin: 5}}>Email</Text>
              </View>
                
                <View style={{
                  backgroundColor:'#34675C', 
                  padding: 5,
                  paddingLeft: 50,
                  paddingRight: 50,
                  borderColor: '#A3CCAB',
                  borderRadius: 5,
                  borderWidth: 2,
                  margin: 5,
                  }}>
                <TextInput 
                placeholder='Exemplo@gmail.com'
                placeholderTextColor={'#fff'}
                />
                </View>

                <View style={{alignItems:'center'}}>
                  <Text style={{fontWeight:'bold', margin: 5}}>Senha</Text>
                </View>                
                <View style={{
                  backgroundColor:'#34675C', 
                  padding: 5,
                  paddingLeft: 50,
                  paddingRight: 50,
                  borderColor: '#A3CCAB',
                  borderRadius: 5,
                  borderWidth: 2,
                  margin: 5,

                    }}>
                <TextInput 
                
                placeholder='********'
                placeholderTextColor={'#fff'}
                />
                </View>

                <View style={{alignItems:'center'}}>
                 <Text style={{fontWeight:'bold', margin: 5}}>Celular</Text>
                </View>

                <View style={{
                  backgroundColor:'#34675C', 
                  padding: 5,
                  borderColor: '#A3CCAB',
                  borderRadius: 5,
                  borderWidth: 2,
                  alignItems:'center',
                  margin: 5,

                    }}>
                     <TextInput 
                     placeholder='(22)999999999'
                     style={{maxWidth: 100,}}
                      keyboardType='numeric'
                      maxLength={11}  //setting limit of input
                    />
                </View>

                <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                style={{
                  backgroundColor: '#14140F', 
                  padding: 10, 
                  marginBottom: -30, 
                  marginTop: 50,
                  borderColor: '#A3CCAB',
                  borderRadius: 5,
                  borderWidth: 2,
                  alignItems:'center',
                  }}>
                  <Text style={{color: 'white'}}>Cadastrar-se</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                style={{
                  backgroundColor: '#14140F', 
                  padding: 10, 
                  marginBottom: -30, 
                  marginTop: 50,
                  borderColor: '#A3CCAB',
                  borderRadius: 5,
                  borderWidth: 2,
                  alignItems:'center',

                  }}>
                  <Text style={{color: 'white'}}>Ja possuo conta</Text>
                </TouchableOpacity>
              </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default Cadastro;