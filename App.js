import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <PaperProvider>
      <HomeScreen />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
