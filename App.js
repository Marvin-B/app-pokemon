import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Header from './src/components/Header';
import Searchbar from './src/components/Searchbar';
import PokemonsList from './src/components/PokemonsList';

const App = () => {
    return (
        <View style={{backgroundColor:"white"}}>
          <Header />
          <Searchbar />
          <PokemonsList />
        </View>
    );
};

export default App;

