import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  Alert, 
          Button, 
          StyleSheet, 
          Text, 
          TouchableOpacity, 
          TouchableWithoutFeedback, 
          Image, 
          Dimensions, 
          View,
          AsyncStorage} from 'react-native';





export default function Home(props) {


  return (
    <View style={styles.container}>
        <Image style ={styles.img} source={require("../assets/img/pokemon-logo.png")} />
        <Text style={[styles.text, styles.textTitle]}>Informational Pokedex</Text>
        <Text style={styles.text}>by: Joshua Wood</Text>

      {/*<StatusBar style="auto" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    fontSize: 25,
    fontWeight: "700",
  },
  textTitle: {
    color: "black",
    fontSize: 35,
    fontWeight: "700",
  },
  img: {
    width: 400,
    height: 200,
  },

});
