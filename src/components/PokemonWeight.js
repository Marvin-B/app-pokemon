import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PokemonWeight = ({ pokemon }) => {
return (
<View>
<Text style={styles.element}>{pokemon.weight / 10} kg</Text>
</View>
);
};

export default PokemonWeight;

const styles = StyleSheet.create({
    element: {
        textAlign:"center",
        textTransform:"uppercase",
        fontSize:20,
        fontFamily:"Roboto"
    },
});