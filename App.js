import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import { store } from './src/store';
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainNavigation />
      </PaperProvider>
    </Provider>
  );
}
