import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import PokemonImage from './PokemonImage.js';
import Searchbar from './Searchbar';

import { useNavigation } from '@react-navigation/native';


const PokemonsList = () => {
    const navigation = useNavigation();
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


    const handlePress = (pokemon) => {
        navigation.navigate('PokemonDetails', { pokemon });
    }
    
    const handleLoadMore = () => {
        setOffset(offset + 20);
    };

    return (
        <View>
            <Searchbar />
            <FlatList
                data={pokemons}
                keyExtractor={item => item.url.split('/')[6]}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item)}>
                        <View style={liste.global}>
                            <PokemonImage pokemonName={item.name} />
                            <Text style={liste.texte}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                    
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
        borderBottomColor: '#545356',
    },
    texte: {
        fontSize:30,
    },
});