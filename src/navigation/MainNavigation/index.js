import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import { IconButton, MD3Colors, Text } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const isSignedIn = true;

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: 'ToDos',
              headerLeft: () => <Text variant="labelMedium">Hi, World</Text>,
              headerRight: () => (
                <IconButton
                  style={{ marginRight: -10 }}
                  icon="logout"
                  iconColor={MD3Colors.error50}
                  size={20}
                  onPress={() => console.log('Pressed')}
                />
              ),
            }}
          />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
