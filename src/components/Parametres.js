import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Parametres = () => {
    return (
        <View style={{flex:1,justifyContent:'center'}}>
            <Text style={style.parametres}>Ceci est une page de paramètres mais honnêtement je ne sais pas quoi paramétrer, c'est uniquement afin d'ajouter une BottomBarTab.</Text>
            <Text style={style.parametres}>Parce que c'est dans la consigne. C'est tout.</Text>
            <Text style={style.parametres}>Voilà voilà ...</Text>
            <Text style={style.parametres}>La searchbar et l'affichage de la description ne fonctionnent pas. Je n'ai pas trouvé le problème. Désolé</Text>
            <Text style={style.parametres}>-Marvin</Text>


        </View>
    );
};

export default Parametres;

const style = StyleSheet.create({
    parametres : {
        paddingRight: 30,
        paddingLeft: 30,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
        lineHeight: 36,
        textAlign: 'justify',
    },
});