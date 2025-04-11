import {LogBox} from 'react-native';
import React from 'react';
import store from '@redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import Route from '@navigation/index';
const App = () => {
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false, // Reanimated runs in strict mode by default
  });
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    'new NativeEventEmitter()',
  ]);
  LogBox.ignoreAllLogs();
  const persistStore = store();
  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <GestureHandlerRootView>
          <Route />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
