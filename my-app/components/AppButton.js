import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function AppButton (props){

    return (
    <TouchableOpacity style={styles.counterButton} onPress={props.countPress}>
        <Text style={styles.counterButtonText}>Press Here</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    counterButton: {
      backgroundColor: "purple",
      padding: 10,
      
    },
    counterButtonText: {
      color: "white",
    }
  });