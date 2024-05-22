import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native';


const Buttom = ({title, onPress}) => {
const titleText = title ? `${title}` : 'Press me';
return (
    <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{titleText}</Text>
    </Pressable>
);
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 5,
      backgroundColor: '#D3ECBC',
    },
    text: {
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'SemiBold',
      fontFamily: 'JosefinSans_400Regular',
      letterSpacing: 0.25,
      color: '000000',
    },
  })
export default Buttom;