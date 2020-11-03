import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Text, StyleSheet,ScrollView, TouchableOpacity,Button,Animated } from 'react-native'



export default function Pikachu() {
    
    const spinAnim = useRef(new Animated.Value(0)).current;
    let animatedValue = new Animated.Value(0);
    let currentValue = 0;

    animatedValue.addListener(({ value }) => {
        currentValue = value;
      });

      const flipAnimation = () => {
        if (currentValue >= 90) {
          Animated.spring(animatedValue, {
            toValue: 0,
            tension: 10,
            friction: 8,
            useNativeDriver: false,
          }).start();
        } else {
          Animated.spring(animatedValue, {
            toValue: 180,
            tension: 10,
            friction: 8,
            useNativeDriver: false,
          }).start();
        }
      };

      const setInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
      });

      const rotateYAnimatedStyle = {
        transform: [{ rotateY: setInterpolate }],
      };

    const startAnim = () => {
        spinAnim.setValue(0);
        Animated.spring(this.animatedValue, {
            toValue: 1,
            tension: 10,
            fraction: 8,
            useNativeDriver: true,
        },{useNativeDriver: true},).start();
        
    }

    const buttonAnim = () =>{
        startAnim();

    }

    return (
        <ScrollView>
            <View style={styles.title}>
                <Text style={[styles.titleText, styles.pkmnName]}>Pikachu</Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={flipAnimation}>                
                    <Animated.Image style={[rotateYAnimatedStyle, styles.img]}
                     source={require("../assets/img/025Pikachu.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={flipAnimation}>  
                    <Text>Click to Mirror Artwork</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}>Species</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.cellText}>Mouse Pokemon</Text>
            </View>

            <View style={styles.flexContainer}>
                <View style={[styles.subTitle, styles.sub1]}>
                    <Text style={styles.subTitleText}>Height</Text>
                </View>              
                
                <View style={[styles.subTitle, styles.sub2]}>
                    <Text style={styles.subTitleText}>Weight</Text>
                </View>              
            </View>

            <View style={styles.flexContainer}>
                <View style={[ styles.sub1]}>
                    <Text style={styles.cellText}>2m</Text>
                </View>              
                
                <View style={[styles.sub2]}>
                    <Text style={styles.cellText}>20 lbs</Text>
                </View>              
            </View>
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}>Ability</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.cellText}>Static</Text>
            </View>
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}>Type</Text>
            </View>
            <View style={styles.container}>
                
                    <Text style={[styles.cellText, styles.electricText]}>Electric</Text>
                
            </View>
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}>Stats</Text>
            </View>

            <View style={styles.statsContainer}>
                
                <View style={[styles.hpBar,styles.statBar]}>
                    <Text style={styles.statText}>HP: 35</Text>
                </View>
                <View style={[styles.atkBar,styles.statBar]}>
                    <Text style={styles.statText}>ATK: 55</Text>
                </View>
                <View style={[styles.defBar,styles.statBar]}>
                    <Text style={styles.statText}>Def: 40</Text>    
                </View>
                <View style={[styles.spatkBar,styles.statBar]}>
                    <Text style={styles.statText}>Sp. Atk: 50</Text>  
                </View>
                <View style={[styles.spdefBar,styles.statBar]}>
                    <Text style={styles.statText}>Sp. Def: 50</Text>  
                </View>
                <View style={[styles.speedBar,styles.statBar]}>
                    <Text style={styles.statText}>Speed: 90</Text>  
                </View>

                
            </View>

            
            <View style={styles.subTitle}>
                <Text style={styles.subTitleText}>Moves</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.cellText}>Thunderbolt</Text>
                <Text style={styles.cellText}>Tail Whip</Text>
                <Text style={styles.cellText}>Quick Attack</Text>
                <Text style={styles.cellText}>Thunder Wave</Text>
                <Text style={styles.cellText}>Iron Tail</Text>
                <Text style={styles.cellText}>Double Team</Text>
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
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    
  
  });
  