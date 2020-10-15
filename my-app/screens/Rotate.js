import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Animated, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function Rotate(){

    const spinAnim = useRef(new Animated.Value(0)).current;
    const isFocused = useIsFocused();
    const [dogetext, setDogeText] = useState("");
    const dogePhrases = ["Wheee!", "Again?", "Alright You Can Stop Now","Stooooop!","I'm getting Dizzy!","...", "I've Given Up. Might as well enjoy it!"];
    const [phraseI, setPhraseI] = useState(0);

    const startAnim = () => {
        spinAnim.setValue(0);
        Animated.timing(spinAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        },{useNativeDriver: true},).start();
        
    }

    const buttonAnim = () =>{
        setDogeText(dogePhrases[phraseI]);
        startAnim();
        if (phraseI < 6){
            setPhraseI(phraseI + 1); 
        }
        else{
            setPhraseI(0); 
        }
    }


    // useEffect(()=>{
    //     startAnim();
    //     return () => {
    //         spinAnim.setValue(0);
    //     };
    // },[spinAnim, isFocused]);



    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center",}}>
            <Animated.Image source={require("../assets/img/dogehead.png")} style={{
                width: 200, 
                height: 200,
                transform: [{rotate: spinAnim.interpolate({
                    inputRange: [0,1],
                    outputRange: ["0deg", "360deg"],
                })}] }}/>
                <Text style={{margin: 10, fontFamily: "monospace", color: "purple", fontWeight: "bold"}}>{dogetext}</Text>
                <Button title="ROTATE HIM" onPress={buttonAnim}/>
                
        </View>
    )
}


export default Rotate;
