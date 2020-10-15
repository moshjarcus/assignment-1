import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Animated } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function Fade(){

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const isFocused = useIsFocused();
    const [onoff, setOnOff] = useState(false);
    const [btnText, setBtnText] = useState("Wake Up!");
    const [dogetext, setDogeText] = useState("zzzZZzzz");


    // useEffect(()=>{

    //     Animated.timing(fadeAnim, {
    //         toValue: 1,
    //         duration: 1000,
    //         useNativeDriver: true,
    //     }).start();

    //     return () => {
    //         fadeAnim.setValue(0);
    //     };
    // },[fadeAnim, isFocused]);

    const startAnim = () => {
        fadeAnim.setValue(0);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        },{useNativeDriver: true},).start();
        
    }
    const startAnimOut = () => {
        fadeAnim.setValue(1);
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
        },{useNativeDriver: true},).start();
        
    }

    const buttonAnim = () =>{

        if (onoff == false){
            startAnim();
            setBtnText("Go To Bed")
            setDogeText("Huh? What?")
            setOnOff(true);
        }
        else{
            startAnimOut();
            setBtnText("Wake Up!")
            setDogeText("zzzZZzzz");
            setOnOff(false);
        }

    }



    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center",}}>
            <Animated.Image source={require("../assets/img/dogehead.png")} style={{
                opacity:  fadeAnim,
                width: 200, 
                height: 200,
                transform: [{translateY: fadeAnim.interpolate({
                    inputRange: [0,1],
                    outputRange: [100, 0],
                })}] }}/>
                <Text style={{margin: 10, fontFamily: "monospace", color: "purple", fontWeight: "bold"}}>{dogetext}</Text>
                <Button title={btnText} onPress={buttonAnim}/>

                
        </View>

                    // <View style={{flex: 1, alignItems: "center", justifyContent: "center",}}>
                    //     <Animated.View
                    //         style={{
                    //             opacity: fadeAnim,
                    //             width: 150,
                    //             height: 50,
                    //             borderRadius: 10,
                    //             backgroundColor: "purple",
                    //             transform: [{
                    //                 translateY: fadeAnim.interpolate({
                    //                     inputRange: [0,1],
                    //                     outputRange: [100,0],
                    //                 }),
                    //             }
                    //             ]
                    //         }}
                    //     >
                    //         <Text style={{color: "white", textAlign: "center", margin: 10, fontSize: 20,}}>
                    //             Fade In</Text>
                    //     </Animated.View>
                    // </View>
    )
}


export default Fade;
