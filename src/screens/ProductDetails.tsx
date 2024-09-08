import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import ImageList from '../components/ImageList';
import { dispatch, useSelector } from '../store';
import { toogleLock } from '../store/reducers/home';

export default function ProductDetails() {
  const {currentProductData} = useSelector(state=>state.home)
  
  return (
    <View style={styles.container}>
      <Text style={styles.head}>{currentProductData.title}</Text>
      <ImageList data={currentProductData.photos} />
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.priceTag}>₹ {currentProductData.price}</Text>
          <TouchableOpacity
            onPress={()=>{
              toogleLock(currentProductData.id,!currentProductData.locked)
            }}
          >
            <EntypoIcon
              name={currentProductData.locked ? 'lock' : 'lock-open'}
              color={'#6947fd'}
              size={25}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.desc}>{currentProductData.description}</Text>
        <Text style={styles.head}>Features</Text>
        <Text style={styles.txt}>
          {currentProductData.features.bedrooms} Bed Rooms,{' '}
          {currentProductData.features.bathrooms} Bath Rooms
        </Text>
        <Text style={styles.txt}>
          {currentProductData.features.garage && 'Garage: Yes'},{' '}
          {currentProductData.features.swimmingPool && 'Swimming Pool: Yes'}
        </Text>

        <Text style={styles.head}>Address</Text>
        <View style={styles.row}>
          <Text style={styles.txt}>
            {currentProductData.address.street}, {currentProductData.address.city},{' '}
            {currentProductData.address.state} {currentProductData.address.zipCode}{' '}
            {currentProductData.address.country}
          </Text>
        </View>
        <Text style={styles.head}>Agent</Text>
        <Text style={styles.txt}>
          {currentProductData.agent.name} ( {currentProductData.agent.agency} ){' '}
        </Text>
        <Text style={styles.txt}>{currentProductData.agent.phone}</Text>
        <Text style={styles.txt}>{currentProductData.agent.email}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.btn,
          {
            backgroundColor: currentProductData.locked ? '#8d8d8d' : '#00b0bd',
          },
        ]}
        disabled>
        <Text style={styles.btnTxt}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  mainContainer: {
    padding: 10,
    marginBottom: 10,
  },
  head: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 11,
    textDecorationLine: 'underline',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  txt: {color: '#747474', fontSize: 17},
  priceTag: {color: '#009744', fontWeight: 'bold', fontSize: 20},
  title: {color: '#000000', fontSize: 20},
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  desc: {
    color: '#5a5a5a',
    marginTop: 5,
    fontSize: 18,
  },
  btn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 20,
    borderRadius: 22,
  },
  btnTxt: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
