import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import axios from 'axios';

const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemons(response.data.results);
    }

    return (
        <View>
            <FlatList
                data={pokemons}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                onEndReached={fetchPokemons}
                onEndReachedThreshold={0.1}
            />
        </View>
    );
};

export default PokemonsList;