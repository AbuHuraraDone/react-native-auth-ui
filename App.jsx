import React, {useState} from 'react';
import { StyleSheet, View,  } from 'react-native';
import { Login } from './src/components/Login.jsx';

export default function App() {
  
    
  return (
    <View style={styles.container}>
      <Login title={"User Login Here"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  }
});   