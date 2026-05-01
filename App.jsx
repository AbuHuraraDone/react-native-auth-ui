import React, {useState} from 'react';
import { StyleSheet, View, StatusBar  } from 'react-native';
import { Login } from './src/components/Login.jsx';
import { Register } from './src/components/Register.jsx';
import { Posts } from './src/components/Posts.jsx';
import { Radio } from './src/utils/radio.jsx';
import { ModelCode } from './src/utils/Modal.jsx';
import { Webview } from './src/utils/Webview.jsx';

export default function App() {
  
    
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={"dark-content"} />
      {/* <Login title={"User Login Here"} /> */}
      {/* <Register title={"User Register Here"} /> */}
      {/* <Posts /> */}
      {/* <Radio /> */}
      {/* <ModelCode /> */}
      <Webview />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbd8d8',
  }
});   