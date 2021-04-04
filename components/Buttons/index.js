import React from 'react';
import styles from './style';
import { Text, View, ImageBackground, Pressable } from 'react-native';

const Button = (props) => {


    const type = props.type;

    const backgroundColor = type === "primary" ? "black" : "white";
    const textColor = type === "primary" ? "white" : "black";

    return (
        <View style={styles.container}>
<Pressable
    style={[styles.button, {backgroundColor: backgroundColor}]}
    onPress={() => {
        // console.warn("hi")
    }}
>
<Text style={[styles.text, {color: textColor}]}>{props.content}</Text>
</Pressable>
        </View>
    );
};

export default Button;