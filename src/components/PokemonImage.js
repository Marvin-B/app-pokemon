import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import axios from 'axios';

const PokemonImage = ({ pokemonName }) => {
    const [pokemonImageUrl, setPokemonImageUrl] = useState('');

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => {
                setPokemonImageUrl(response.data.sprites.front_default);
            })
            .catch(error => {
                console.log(error);
            });
    }, [pokemonName]);

    return (
        <Image
           source={pokemonImageUrl ? {uri: pokemonImageUrl} : require('../assets/pokeball.png')}
           style={image.image}
        />
     );
     
};

export default PokemonImage;


const image = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    }
});