import * as React from 'react';
import { View } from 'react-native';
import PokemonsList from './src/components/PokemonsList';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/components/Navigation';

const App = () => {
    return (
      <NavigationContainer>
        <Navigation>
          <View style={{backgroundColor: "white"}}>
            <PokemonsList />
          </View>
        </Navigation>
      </NavigationContainer>
    );
};

export default App;
