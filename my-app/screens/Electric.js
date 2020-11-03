import React from 'react'
import { View, Image, Text, StyleSheet,ScrollView } from 'react-native'

export default function Electric() {
    return (
        <ScrollView>
            <View style={styles.title}>
                <Text style={[styles.titleText, styles.pkmnName]}>Electric</Text>
            </View>
            <View style={styles.container}>
                <Image style ={styles.img} source={require("../assets/img/Electric-Symbol.png")} />
            </View>


            <View style={styles.flexContainer}>
                <View style={[styles.subTitle, styles.sub1]}>
                    <Text style={styles.subTitleText}>Strong Against</Text>
                </View>              
                
                <View style={[styles.subTitle, styles.sub2]}>
                    <Text style={styles.subTitleText}>Weak Against</Text>
                </View>              
            </View>

            <View style={styles.flexContainer}>
                <View style={[ styles.sub1]}>
                    <Text style={[styles.cellText, styles.waterText]}>Water</Text>
                    <Text style={[styles.cellText, styles.flyingText]}>Flying</Text>
                </View>              
                
                <View style={[styles.sub2]}>
                    <Text style={[styles.cellText, styles.groundText]}>Ground</Text>
                    
                </View>              
            </View>
            
            
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}>Average Stats</Text>
            </View>

            <View style={styles.statsContainer}>
                
                <View style={[styles.hpBar,styles.statBar]}>
                    <Text style={styles.statText}>HP: 64.06</Text>
                </View>
                <View style={[styles.atkBar,styles.statBar]}>
                    <Text style={styles.statText}>ATK: 74.84</Text>
                </View>
                <View style={[styles.defBar,styles.statBar]}>
                    <Text style={styles.statText}>Def: 69.56</Text>    
                </View>
                <View style={[styles.spatkBar,styles.statBar]}>
                    <Text style={styles.statText}>Sp. Atk: 86.93</Text>  
                </View>
                <View style={[styles.spdefBar,styles.statBar]}>
                    <Text style={styles.statText}>Sp. Def: 71.37</Text>  
                </View>
                <View style={[styles.speedBar,styles.statBar]}>
                    <Text style={styles.statText}>Speed: 80.21</Text>  
                </View>

                
            </View>
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}>Electric Pokemon</Text>
            </View>
            <View style={styles.container}>
                <Image style ={styles.pokeimg} source={require("../assets/img/025Pikachu.png")} />
                <Text style={styles.pokeText}>Pikachu</Text>
                <Image style ={styles.pokeimg} source={require("../assets/img/100Voltorb.png")} />
                <Text style={styles.pokeText}>Voltorb</Text>
                <Image style ={styles.pokeimg} source={require("../assets/img/135Jolteon.png")} />
                <Text style={styles.pokeText}>Jolteon</Text>
                <Image style ={styles.pokeimg} source={require("../assets/img/125Electabuzz.png")} />
                <Text style={styles.pokeText}>Electabuzz</Text>
            </View>        
            
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}>Moves</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.cellText}>Thunder Shock</Text>
                <Text style={styles.cellText}>Thunderbolt</Text>
                <Text style={styles.cellText}>Thunder</Text>
                <Text style={styles.cellText}>Thunder Wave</Text>
                <Text style={styles.cellText}>Thunder Punch</Text>
                <Text style={styles.cellText}>Spark</Text>
                <Text style={styles.cellText}>Zap Cannon</Text>
                <Text style={styles.cellText}>Charge</Text>
                <Text style={styles.cellText}>Shock Wave</Text>
                <Text style={styles.cellText}>Volt Tackle</Text>
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
    pokeText: {
        fontSize: 25,
        marginBottom: 20
    },
    statBar: {
        height: 40,
        margin: 2,
        justifyContent: 'center',
    },
    hpBar: {
        width: 160,
        backgroundColor: "#ff5340",
 
    },
    atkBar: {
        width: 185,
        backgroundColor: "#ffbb4d",
    },
    defBar: {
        width: 172,
        backgroundColor: "#fafa64",
    },
    spatkBar: {
        width: 217,
        backgroundColor: "#658af0",
    },
    spdefBar: {
        width: 177,
        backgroundColor: "#31d46c",

    },
    speedBar: {
        width: 200,
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
    waterText: {
        color: "black",
        backgroundColor: "#73d0f5",
        padding: 15,
        margin: 7
    },
    flyingText: {
        color: "black",
        backgroundColor: "#cce4ed",
        padding: 15,
        margin: 7
    },
    groundText: {
        color: "black",
        backgroundColor: "#baa98c",
        padding: 15,
        margin: 7
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
      width: 100,
      height: 100,
      margin: 50,
      resizeMode: 'contain',
    },
    pokeimg: {
        width: 150,
        height: 150,
        margin: 10,
        resizeMode: 'contain',

    },
    
  
  });
  