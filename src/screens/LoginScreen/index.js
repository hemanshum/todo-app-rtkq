import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

const LoginScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="titleLarge">
       Welcome to Todo App
      </Text>
      <TextInput label="Username" value={text} onChangeText={(text) => setText(text)} />
      <TextInput label="Password" value={text} onChangeText={(text) => setText(text)} />
      <Button
        style={styles.button}
        icon="login"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingVertical: 30,
  },
  container: {
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingTop: 200,
  },
  button: {
    borderRadius: 0,
    paddingVertical: 8,
  },
});

export default LoginScreen;
