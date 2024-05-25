import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Buttom from "./Buttom";
import Input from "./Input";
import fetcho from "../services/fetcho";


const Login = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ClickLogin = async () => {
    try{
      const body = {password: password, 
        userName: user};
      console.log(body)
      // url = 'login'
      // console.log(`${"http://localhost:7878/"}${url}`)
      const fetchPost = {url: '/login', method: 'POST', body};

      const result = await fetcho(fetchPost)

      if(result){
        console.log(result)
        alert('Has iniciado sesion')
      }

    } catch (error){
      console.log(error)
    }
  }

    return (
        <View style={styles.container}>
            <Text style={styles.TitleText}>YouConnect</Text>
            <Input placeHolder="Email" value={user} styles={styles.input} onChangeText={setUser}/>
            <Input placeHolder="Password" value={password} styles={styles.input} onChangeText={setPassword}/>
            <Buttom title="Log In" onPress={() => ClickLogin()}/>
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