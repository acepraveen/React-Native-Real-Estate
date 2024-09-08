import 'react-native-gesture-handler';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persister, store} from './src/store';
import RootNavigation from './src/navigation/RootNavigation';

function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <RootNavigation />
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
