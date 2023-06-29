import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import {
  changeName,
  changeSigninStatus,
  useAddUserMutation,
  useFetchUsersQuery,
  useLoginUserMutation,
} from '../../store';
import { isNewUser } from '../../utils/isNewUser';
import { findUser } from '../../utils/findUser';
import { useDispatch } from 'react-redux';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const { data, error, isFetching } = useFetchUsersQuery();
  const [loginUser, results] = useLoginUserMutation();
  const [addUser, userResults] = useAddUserMutation();

  const handleLogin = async () => {
    if (!isNewUser(data, user)) {
      const currentUser = findUser(data, user);
      loginUser(currentUser);
    } else {
      addUser({ name: user, password });
    }
    dispatch(changeSigninStatus(true));
    dispatch(changeName(user));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="titleLarge">
        Welcome to Todo App
      </Text>
      <TextInput label="Username" value={user} onChangeText={(user) => setUser(user)} />
      <TextInput
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        loading={isFetching}
        style={styles.button}
        icon="login"
        mode="contained"
        onPress={handleLogin}>
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
