import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import userReducer from './user';
import homeReducer from './home'
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({
  user: persistReducer(
    {
      key: 'user',
      storage: AsyncStorage,
      keyPrefix: 'smartTask',
    },
    userReducer,
  ),
  home: persistReducer(
    {
      key: 'home',
      storage: AsyncStorage,
      keyPrefix: 'smartTask',
    },
    homeReducer,
  ),
});

export default reducers;
