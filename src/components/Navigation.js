import { createStackNavigator } from '@react-navigation/stack';
import PokemonsList from './PokemonsList';
import PokemonDetails from './PokemonDetails';
import Parametres from './Parametres';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Liste des Pokemons" component={PokemonsList} 
    options={{
      headerLeft: () => (
        <Ionicons
          name="ios-home"
          size={25}
          color="white"
          style={{ marginLeft: 10 }}
          onPress={() => navigation.navigate('Liste des Pokemons')}
        />
      ),
    }}
    />
    <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
  </Stack.Navigator>
);

const Navigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Liste des Pokemons') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home';
        } else if (route.name === 'Paramètres') {
          iconName = focused ? 'ios-settings' : 'ios-settings';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#ff3838',
      inactiveTintColor: '#545356',
    }}
  >
    <Tab.Screen name="Liste des Pokemons" component={HomeStack} />
    <Tab.Screen name="Paramètres" component={Parametres} />
  </Tab.Navigator>
);

export default Navigation;
    





