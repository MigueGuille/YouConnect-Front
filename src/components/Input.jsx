import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = ({placeHolder, onChangeText, value, styles}) => {
    const placeholderText = placeHolder ? `${placeHolder}` : 'Enter text';

    // console.log(value)
    return (
        <TextInput
        placeholder = {placeholderText}
        style = {styles}
        value = {value}
        onChangeText = {onChangeText}
        /> 
    )
}

export default Input;