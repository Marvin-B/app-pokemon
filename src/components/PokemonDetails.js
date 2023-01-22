import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import axios from 'axios';
import PokemonWeight from './PokemonWeight';
import PokemonTypes from './PokemonTypes';
import PokemonName from './PokemonName';
import PokemonDescription from './PokemonDescription';
import PokemonImage from './PokemonImage';

const PokemonDetails = ({ route }) => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await axios.get(route.params.pokemon.url);
            setPokemon(response.data);
        }
        fetchPokemon();
    }, [route.params.pokemon]);

    return (
        <View>
            <PokemonImage pokemon={pokemon}/>
            <PokemonName pokemon={pokemon} />
            <PokemonTypes pokemon={pokemon} />
            <PokemonWeight pokemon={pokemon} />
            <Text>Description : </Text><PokemonDescription pokemon={pokemon} />
        </View>
    );
};

export default PokemonDetails;


