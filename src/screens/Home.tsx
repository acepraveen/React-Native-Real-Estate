import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import { useSelector} from '../store';
import CustomFlatList from '../components/CustomFlatList';

export default function Home() {
  const navigation = useNavigation();
  const {userData} = useSelector(state => state.user);
  const {homeData} = useSelector(state => state.home);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#8ad4ff',
          paddingVertical: 21,
          paddingHorizontal: 8,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={{uri: userData.image}}
            style={{height: 33, width: 34, backgroundColor: 'black'}}
          />
          <Text style={{marginLeft: 11, color: '#000000', fontWeight: 'bold'}}>
            Hello {userData.name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.clear();

            navigation.replace('Login');
          }}
          style={{
            backgroundColor: '#ff0000',
            padding: 7,
            borderRadius: 7,
          }}>
          <Text style={{color: '#ffffff'}}>Logout</Text>
        </TouchableOpacity>
      </View>
      <CustomFlatList data={homeData} title={'Nearby'} />
    </View>
  );
}

const styles = StyleSheet.create({});
