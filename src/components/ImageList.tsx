import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
const {width, height} = Dimensions.get('window');

export default function ImageList({data}: {data: any}) {
  return (
    <View style={{height: height / 4}}>
      <Carousel
        loop
        width={width / 1.08}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={({index, item}) => (
          <ImageBackground
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}
            source={{uri: item}}></ImageBackground>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
