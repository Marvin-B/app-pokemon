import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, TouchableOpacity, Text } from 'react-native';

const FavoritesManager = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      setFavorites(JSON.parse(storedFavorites));
    }
    fetchFavorites();
  }, []);

  const handleAddToFavorites = (pokemon) => {
    setFavorites([...favorites, pokemon]);
    AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  }

  const handleRemoveFromFavorites = (pokemon) => {
    const updatedFavorites = favorites.filter(p => p.name !== pokemon.name);
    setFavorites(updatedFavorites);
    AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  return (
    <View>
      {favorites.map(pokemon => (
        <View key={pokemon.name}>
          <Text>{pokemon.name}</Text>
          <TouchableOpacity onPress={() => handleRemoveFromFavorites(pokemon)}>
            <Text>Supprimer des favoris</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
