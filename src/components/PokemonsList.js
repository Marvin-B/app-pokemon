import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import PokemonImage from './PokemonImage.js';
import { useNavigation } from '@react-navigation/native';


const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchPokemons = async () => {
        setLoading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
        setPokemons([...pokemons, ...response.data.results]);
        setLoading(false);
    };

    useEffect(() => {
        fetchPokemons();
    }, [offset]);

    const handleLoadMore = () => {
        setOffset(offset + 20);
    };

    return (
        <View>
            <FlatList
                data={pokemons}
                keyExtractor={item => item.url.split('/')[6]}
                renderItem={({ item }) => (
                    <View style={liste.global}>
                        <PokemonImage pokemonName={item.name} />
                        <Text style={liste.texte}>{item.name}</Text>
                    </View>
                )}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <Text>Chargement...</Text> : null}
            />
        </View>
    );
};

export default PokemonsList;

const liste = StyleSheet.create({
    global: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
    },
    texte: {
        fontSize:30,
    },
});