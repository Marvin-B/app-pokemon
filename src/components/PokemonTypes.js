import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const PokemonTypes = ({ pokemonName }) => {
const [pokemon, setPokemon] = useState({});

useEffect(() => {
    const fetchPokemon = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setPokemon(response.data);
    }
    fetchPokemon();
}, [pokemonName]);

return (
    <View>
        <Text>{PokemonTypes && Array.isArray(PokemonTypes) ? pokemonTypes.map(type => type.type.name).join(', ') : 'Not available'}</Text>
    </View>
);
};

export default PokemonTypes;