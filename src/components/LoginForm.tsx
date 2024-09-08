import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  Linking,
} from 'react-native';
import {Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from '../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {handleUserData} from '../store/reducers/user';
import Loader from './Loader';

interface FormValues {
  username: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loader, setLoader] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (
    values: FormValues,
    {setSubmitting}: FormikHelpers<FormValues>,
  ) => {
    try {
      setLoader(true);
      let data = JSON.stringify({
        username: values.username,
        password: values.password,
      });
      const res: any = await axios.post('auth/login', data);
      console.log('res', res.data);
      if (res.data) {
        ToastAndroid.show('Login success', ToastAndroid.LONG);
        await AsyncStorage.setItem('token', res.data.token);
        navigation.replace('Home');
        handleUserData({
          id: res.data.id,
          name: res.data.firstName,
          email: res.data.email,
          image: res.data.image,
          gender: res.data.gender,
        });
      }
    } catch (error) {
      console.log('login failed', error);
      ToastAndroid.show('Login failed', ToastAndroid.LONG);
    } finally {
      setLoader(false);
    }
  };

  return (
    <View style={styles.container}>
      <Loader loading={loader} />

      <Text
        style={{
          fontSize: 32,
          color: '#000000',
          textAlign: 'center',
          marginBottom: 50,
        }}>
        Welcome
      </Text>
      <Formik
        initialValues={{username: 'emilys', password: 'emilyspass'}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {touched.username && errors.username && (
              <Text style={styles.errorText}>{errors.username}</Text>
            )}

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={!passwordVisible}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <Icon
                  name={passwordVisible ? 'eye-slash' : 'eye'}
                  size={20}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TouchableOpacity
              onPress={handleSubmit as () => void}
              style={styles.btn}>
              <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL('https://dummyjson.com/users');
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            color: '#007bac',
            marginTop: 20,
          }}>
          You can use any user's credentials from here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    height: 70,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
  btn: {
    backgroundColor: '#00add8',
    padding: 22,
    borderRadius: 7,
  },
  btnTxt: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginForm;
