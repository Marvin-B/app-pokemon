// Je n'utilise finalement pas ce composant, mais je le laisse néanmoins.

import React from "react";
import { View, Text, StyleSheet, Image} from 'react-native';

const Header = () => {
    return (
        <View style={header.global}>
            <Image source={require('../assets/pokeball.png')} style={header.image} />
            <Text style={header.text}><Text style={{fontSize:30, color:"orange"}}>P</Text>okedex</Text>
        </View>
    );
}

export default Header;

const header = StyleSheet.create({
    global: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        paddingTop:50,
        paddingBottom:10,
        borderBottomWidth:5,
        borderBottomColor:'orange',
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Impact',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
});
