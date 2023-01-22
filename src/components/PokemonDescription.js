import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PokemonDescription = ({ pokemon }) => {
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchDescription = async () => {
            if (pokemon && pokemon.flavor_text_entries) {
                const frenchDescription = pokemon.flavor_text_entries.find(
                  entry => entry.language.name === 'fr'
                );
                if (frenchDescription) {
                    setDescription(frenchDescription.flavor_text);
                }
            }
        }
        fetchDescription();
    }, [pokemon]);

    return (
        <View>
            <Text styles={styles.element}>{description}</Text>
        </View>
    );
};

export default PokemonDescription;

const styles = StyleSheet.create({
    element: {
        textAlign:"justify",
        fontSize:20,
        fontFamily:"Roboto"
    },
});
