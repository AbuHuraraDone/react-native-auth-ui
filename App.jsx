import React, {useState} from 'react';
import { StyleSheet, View,  } from 'react-native';
import { Login } from './src/components/Login.jsx';
import { Register } from './src/components/Register.jsx';
import { Posts } from './src/components/Posts.jsx';
import { Radio } from './src/utils/radio.jsx';

export default function App() {
  
    
  return (
    <View style={styles.container}>
      {/* <Login title={"User Login Here"} /> */}
      {/* <Register title={"User Register Here"} /> */}
      {/* <Posts /> */}
      <Radio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  }
});   