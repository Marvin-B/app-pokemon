import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const PokemonDescription = ({ pokemon }) => {
    const [pokemonDescription, setPokemonDescription] = useState('');

    useEffect(() => {
        const fetchPokemonDescription = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
            const flavorTextEntries = response.data.flavor_text_entries;
            const englishDescription = flavorTextEntries.find(entry => entry.language.name === 'en');
            setPokemonDescription(englishDescription.flavor_text);
        }
        fetchPokemonDescription();
    }, [pokemon]);

    return (
        <View>
            <Text>{pokemonDescription}</Text>
        </View>
    );
};

export default PokemonDescription;
