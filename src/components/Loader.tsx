import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Loader({loading}:{loading:boolean}) {
  return (
    <Modal visible={loading} transparent>
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center'
  },
});
