import React from 'react';
import { Text, View , StyleSheet} from 'react-native';

const PokemonTypes = ({ pokemon }) => {
    if (!pokemon.types) return null;
    return (
        <View style={styles.container}>
            {pokemon.types.map(type => {
                let color;
                if (type.type.name === 'grass') {
                    color = 'green';
                } else if (type.type.name === 'poison') {
                    color = 'purple';
                } else if (type.type.name === 'fire') {
                    color = 'red';
                } else if (type.type.name === 'water') {
                    color = 'blue';
                } else if (type.type.name === 'ground') {
                    color = 'brown';
                } else if (type.type.name === 'ice') {
                    color = 'slyblue';
                } else if (type.type.name === 'flying') {
                    color = 'skyblue';
                } else if (type.type.name === 'bug') {
                    color = 'darkgreen';
                } else if (type.type.name === 'dragon') {
                    color = 'darkblue';
                } else if (type.type.name === 'fairy') {
                    color = 'pink';
                } else if (type.type.name === 'psychic') {
                    color = 'pink';
                } else if (type.type.name === 'normal') {
                    color = 'grey';
                } else if (type.type.name === 'fighting') {
                    color = 'brown';
                } else if (type.type.name === 'electric') {
                    color = 'orange';
                } else if (type.type.name === 'dark') {
                    color = 'black';
                } else if (type.type.name === 'ghost') {
                    color = 'purple';
                } else if (type.type.name === 'steel') {
                    color = 'teal';
                } else {
                    color = 'black';
                }
                return <Text style={{color: color, textAlign:"center",
                textTransform:"uppercase",
                fontSize:20,
                fontFamily:"Roboto",
                marginRight: 10,}}>{type.type.name}</Text>
            })}
        </View>
    );
};

export default PokemonTypes;

const styles = StyleSheet.create({
container: {
flexDirection: 'row',
justifyContent: 'center',
},
element: {
textAlign:"center",
textTransform:"uppercase",
fontSize:20,
fontFamily:"Roboto",
marginRight: 10,
color:'red'
},
});