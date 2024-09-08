import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;
