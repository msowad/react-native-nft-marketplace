import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from 'screens/Details';
import Home from 'screens/Home';
import { theme } from 'utils/theme';
import { RootStackParams } from './rootStackParams';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStackNavigator: React.FC = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
