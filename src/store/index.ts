import {configureStore} from '@reduxjs/toolkit';
import {
  useSelector as useAppSelector,
  useDispatch as useAppDispatch,
  TypedUseSelectorHook,
} from 'react-redux';
import {
  persistStore,
  persistReducer,
  PERSIST,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
} from 'redux-persist';
import reducers from './reducers';

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducers>;

const {dispatch} = store;
const useDispatch = () => useAppDispatch<AppDispatch>;
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
const persister = persistStore(store);

export {persister, store, dispatch, useSelector, useDispatch};
