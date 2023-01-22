import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const PokemonDetails = ({ route }) => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await axios.get(route.params.url);
            setPokemon(response.data);
        }
        fetchPokemon();
    }, [route.params.url]);

    return (
        <View>
            <Text>{pokemon.name}</Text>
            <Text>Type(s): {pokemon.types.map(type => type.type.name).join(', ')}</Text>
            <Text>{pokemon.weight} kg</Text>
            <Text>{pokemon.description}</Text>
        </View>
    );
};

export default PokemonDetails;