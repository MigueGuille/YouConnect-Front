import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Input = ({placeHolder, onChangeText, value, styles}) => {
    const placeholderText = placeHolder ? `${placeHolder}` : 'Enter text';
    [value, onChangeText] = React.useState('');
    console.log(value);
    return (
        <TextInput
        placeholder = {placeholderText}
        style = {styles}
        onChangeText = {onChangeText}
        value = {value}
        /> 
    )
}

export default Input;