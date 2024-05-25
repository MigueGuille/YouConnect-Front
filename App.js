import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import {StyleSheet, View } from 'react-native';
import  Login from './src/components/Views/Login.jsx';

export default function App() {

  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
