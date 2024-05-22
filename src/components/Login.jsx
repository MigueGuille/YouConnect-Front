import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Buttom from "./Buttom";
import Input from "./Input";


const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.TitleText}>YouConnect</Text>
            <Input placeHolder="Email" value="" styles={styles.input}/>
            <Input placeHolder="Password" value="" styles={styles.input}/>
            <Buttom title="Log In" onPress={() => alert("Has presionado este boton")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    TitleText: {
      fontSize: 64,
      fontWeight: 'SemiBold',
      fontFamily: 'JosefinSans_400Regular',
    },
    input: {
      height: 40,
      margin: 12,
      width: 200,
      borderWidth: 1,
      padding: 10,
    }
  });

export default Login;