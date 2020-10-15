import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Animated, PanResponder, Image } from 'react-native'
import { useIsFocused } from '@react-navigation/native';


const DragGesture = () => {

        const position = useRef(new Animated.ValueXY()).current;
        const isFocused = useIsFocused();

        const panResponder = PanResponder.create({

            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderMove: Animated.event([
                null, 
                {dx:position.x,
                dy: position.y},
            ]),
            onPanResponderGrant: () => {
                position.setOffset({
                    x: position.x._value,
                    y: position.y._value,
                });
            },
            onPanResponderRelease: () => {
            position.flattenOffset();
            Animated.spring(position, {
                toValue: {x: 0, y: 0},
            }).start();
            },
        },
        );

        useEffect(()=>{
            return () => position.setValue({x:0, y:0});
        }, [isFocused]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.ball, position.getLayout()]} {...panResponder.panHandlers}>
                <Image source={require("../assets/img/dogehead.png")} />
            </Animated.View>

        </View>

        
    )
}

export default DragGesture

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    ball: {
        height: 225,
        width: 225,
    }
})
