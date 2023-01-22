import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import axios from 'axios';
import PokemonWeight from './PokemonWeight';
import PokemonTypes from './PokemonTypes';
import PokemonName from './PokemonName';
import PokemonDescription from './PokemonDescription';
import PokemonImage from './PokemonImage';

const PokemonDetails = ({ pokemon }) => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await axios.get(route.params.url);
            setPokemon(response.data);
        }
        fetchPokemon();
    }, [pokemon.url]);

    return (
        <View>
            <PokemonImage pokemon={pokemon} />
            <Text>Nom : </Text><PokemonName pokemon={pokemon} />
            <Text>Poids : </Text><PokemonWeight pokemon={pokemon} />
            <Text>Type(s) : </Text><PokemonTypes pokemon={pokemon} />
            <Text>Description : </Text><PokemonDescription pokemon={pokemon} />
        </View>
    );
};

export default PokemonDetails;
