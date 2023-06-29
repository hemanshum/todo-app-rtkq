import { IconButton, MD3Colors, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const { isSignedIn, userName } = useSelector((state) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: 'ToDos',
              headerLeft: () => {
                return Platform.OS === 'ios' && <Text variant="labelMedium">Hi, World</Text>;
              },
              headerRight: () => (
                <>
                  {Platform.OS === 'android' && <Text variant="labelMedium">Hi, World</Text>}
                  <IconButton
                    style={{ marginRight: -10 }}
                    icon="logout"
                    iconColor={MD3Colors.error50}
                    size={20}
                    onPress={() => console.log('Pressed')}
                  />
                </>
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
