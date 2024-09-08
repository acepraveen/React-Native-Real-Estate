import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {handleCurrentProduct} from '../store/reducers/home';

export default function CustomFlatList({
  data,
  title,
}: {
  data: any;
  title: string;
}) {
  const navigation = useNavigation();

  const renderItem: ListRenderItem<any> = ({item, index}) => (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        borderWidth: 0.2,
        borderRadius: 10,
        marginBottom: 11,
        overflow: 'hidden',
      }}
      onPress={() => {
        handleCurrentProduct(item);
        navigation.navigate('ProductDetails');
      }}>
      <Image
        source={{uri: item.photos && item.photos[0]}}
        style={{height: 200}}
      />
      <View
        style={{
          padding: 10,
          marginBottom: 10,
        }}>
        <Text style={{color: '#000000'}}>{item.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <EntypoIcon name="location-pin" color={'#6947fd'} size={15} />
            <Text style={{color: '#8a8a8a'}}>
              {item.address.city} {item.address.state}
            </Text>
          </View>
          <Text style={{color: '#009744', fontWeight: 'bold'}}>
            ₹ {item.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{paddingHorizontal: 21, paddingVertical: 11}}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 200}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 11,
    textDecorationLine: 'underline',
  },
});
