import React, { useState } from 'react';
import { MaterialIcons } from 'react-native-vector-icons';
import { View, TextInput, StyleSheet} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
    const [pokemon, setPokemon] = useState({});
    const navigation = useNavigation();

    const handleSearch = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
        setPokemon(response.data);
        navigation.navigate('PokemonDetails', {pokemon});
    };

  return (
    <View style={searchbar.global}>
      <TextInput
                style={searchbar.input}
                onChangeText={setSearchTerm}
                value={searchTerm}
                placeholder="Entrez le nom d'un Pokemon"
            />
            <MaterialIcons name="search" style={searchbar.icon} onPress={handleSearch}/>
        </View>
  );
};

export default SearchBar;

const searchbar = StyleSheet.create({
    global: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        borderBottomWidth: 10,
        borderBottomColor: '#545356',
        paddingBottom: 10,
        backgroundColor : 'white',
    },
    icon: {
        color: '#FF3838',
        fontSize:24,
    },
    input: {
        width: 330,
    }
});
