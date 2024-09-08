import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

export default function Splash() {
  const navigation = useNavigation();

  setTimeout(async () => {
    let token = await AsyncStorage.getItem('token');
    if (token) {
      navigation.replace('Home');
    } else {
      navigation.replace('Login');
    }
  }, 2000);

  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        name="building-o"
        size={55}
        color={'#ffffff'}
      />
      <Text style={styles.txt}>Real Estate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#00bba2',
    alignItems:'center',
    justifyContent:'center',
  },
  txt:{
    color:'#ffffff',
    fontSize:33,
    fontWeight:'bold',
    marginTop:10
  }
});
