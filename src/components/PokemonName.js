import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const PokemonName = ({ pokemonName }) => {
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
            <Text>{pokemon.name}</Text>
        </View>
    );
};

export default PokemonName;
