import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create( {
  //Position
  center:{
    alignItems:'center',
    justifyContent:'center',
  },

  //Components
  titulo:{
    fontWeight: 'bold',
    fontSize: 50,
    alignItems: 'center',
    justifyContent:'center',
    color: 'orange',
    margin: 5,
  },

  carousel: {
      alignItems: 'center',
      justifyContent: 'center',
  },

  carouselImg:{
    alignSelf: 'center',
    width: 300,
    height: 500,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  carouselText: {
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 30,
  },

  CardsProducts:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'orange',
    margin: 5,
  },

  // Buttons

  ButtonPromotion:{
    alignItems:'center',
    justifyContent: 'center',
    margin: 25,
  },

  // Header

  header: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection:'row',
  },

  // Main

  main: {
    alignItems:'center',
    justifyContent:'center',
    marginTop: 50,
  },
});