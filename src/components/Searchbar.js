import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(`Recherche de ${searchText}`);
    // Your code to handle the search here
  }

  return (
    <View style={searchbar.global}>
      <TextInput style={searchbar.input}
        placeholder="Rechercher un Pokemon"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <TouchableOpacity onPress={handleSearch}>
      <MaterialIcons name="search" style={searchbar.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const searchbar = StyleSheet.create({
    global: {
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        borderBottomWidth: 10,
        borderBottomColor: '#545356',
        paddingBottom: 10,
        backgroundColor : 'white',
    },
    icon: {
        color: '#FF3838',
        fontSize:24,
    },
    input: {
        width: 330,
    }
});
