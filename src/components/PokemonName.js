import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PokemonName = ({ pokemon }) => {
    return (
    <View>
    <Text style={styles.element}>{pokemon.name}</Text>
    </View>
    );
};
    
    export default PokemonName;


    const styles = StyleSheet.create({
        element: {
            textAlign:"center",
            textTransform:"uppercase",
            fontSize:30,
            fontFamily:"Roboto"
        },
    });

    