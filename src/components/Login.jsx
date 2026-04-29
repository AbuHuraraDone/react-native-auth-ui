import React, {useState} from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

export function Login({title}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if(username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }
    Alert.alert('Login Info', `Username: ${username}\nPassword: ${password}`);
    setUsername('');
    setPassword('');
  }
  const handleForgetPassword = () => {
    Alert.alert('Forget Password', 'Password recovery is not implemented yet.');
  }

  return (
    <View style={[styles.container, GlobalStyles.BaseContainer, {margin:10, borderRadius: 15}]}>
      <Text style={styles.loginText}> {title} </Text>
      <TextInput 
          placeholder="Username"
          style={styles.input} 
          value={username}
          onChangeText={setUsername}
      />
      <TextInput 
          placeholder="Password"
          style={styles.input} 
          secureTextEntry={true}
          textContentType='password'
          value={password}
          onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.forgetPassword} onPress={handleForgetPassword}>
        <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      </TouchableOpacity>
      <TouchableHighlight style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableHighlight>
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
  loginText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input:{
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderRadius: 5,
    borderLeftWidth: 5,
    borderWidth: 1,
    marginTop: 20,
    color: 'black',
    paddingHorizontal: 10,
  },
  forgetPassword: {
    marginLeft: 40,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  forgetPasswordText: {
    color: 'blue',
  },
  button: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});   