import React from 'react'
import { View, Image, Text, StyleSheet,ScrollView, TouchableOpacity, Button } from 'react-native'



export default function Pikachu() {
    return (
        <ScrollView>
            <View style={styles.title}>
                <Text style={[styles.titleText, styles.pkmnName]}>Thunderbolt</Text>
            </View>
            <View style={styles.container}>
                <Image style ={styles.img} source={require("../assets/img/thunderbolt.jpg")} />
            </View>
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}>Type</Text>
            </View>
            <View style={styles.container}>
                
                    <Text style={[styles.cellText, styles.electricText]}>Electric</Text>
                
            </View>


            <View style={styles.flexContainer}>
                <View style={[styles.subTitle, styles.sub1]}>
                    <Text style={styles.subTitleText}>Power</Text>
                </View>              
                
                <View style={[styles.subTitle, styles.sub2]}>
                    <Text style={styles.subTitleText}>Accuracy</Text>
                </View>              
            </View>

            <View style={styles.flexContainer}>
                <View style={[ styles.sub1]}>
                    <Text style={styles.cellText}>95</Text>
                </View>              
                
                <View style={[styles.sub2]}>
                    <Text style={styles.cellText}>100%</Text>
                </View>              
            </View>
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}>Effect</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.cellText}>Thunderbolt does damage and has a 10% chance of paralyzing the target.</Text>
            </View>
  
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}>Learned By</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.cellText}>Pikachu</Text>
                <Text style={styles.cellText}>Voltorb</Text>
                <Text style={styles.cellText}>Electabuzz</Text>
                <Text style={styles.cellText}>Jolteon</Text>
     
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        backgroundColor: "#e4e4e4"
    },
    pkmnName: {
        marginTop: 20
    },
    subTitle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        backgroundColor: "#e4e4e4"
    },
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    sub1: {
        flex: 2,
        width: "50%"
    },
    sub2: {
        flex: 2,
        width: "50%"
    },
    cellText: {
        justifyContent: "center",
        textAlign: "center",
        fontSize: 16,
        paddingVertical: 5,
    },
    statBar: {
        height: 40,
        margin: 2,
        justifyContent: 'center',
    },
    hpBar: {
        width: 70,
        backgroundColor: "#ff5340",
 
    },
    atkBar: {
        width: 110,
        backgroundColor: "#ffbb4d",
    },
    defBar: {
        width: 80,
        backgroundColor: "#fafa64",
    },
    spatkBar: {
        width: 125,
        backgroundColor: "#658af0",
    },
    spdefBar: {
        width: 125,
        backgroundColor: "#31d46c",

    },
    speedBar: {
        width: 225,
        backgroundColor: "#f779f1",
    },
    statText: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: 17,
        fontWeight: "bold",
        marginLeft: 10,
        justifyContent: 'center',
    },

    titleText: {
        fontSize: 42,
        fontWeight: "bold",
    },
    subTitleText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    electricText: {
        color: "black",
        backgroundColor: "#f0eb56",
        padding: 15,
        margin: 15
    },

    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    statsContainer:{
        flex: 1,
        marginVertical: 20,
        marginLeft: 20,
    },
    img: {
      width: "100%",
      height: 250,
      resizeMode: 'contain',
    },
    
  
  });
  