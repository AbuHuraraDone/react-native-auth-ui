import React, {useState, useEffect} from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableHighlight, View, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

export function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => {
    if(username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }
    props.navigation.navigate('Posts', {username: username});
    setUsername('');
    setPassword('');
  }
  const handleForgetPassword = () => {
    Alert.alert('Forget Password', 'Password recovery is not implemented yet.');
  }

  useEffect(()=>{
    Alert.alert('Welcome', 'Welcome to the Login Screen!');
  },[])

  return (
    <View style={[styles.container, GlobalStyles.BaseContainer, {margin:10, borderRadius: 15}]}>
      <Text style={styles.loginText}> User Login Here </Text>
      <TextInput 
          placeholder="Username"
          style={styles.inputUsername} 
          value={username}
          onChangeText={setUsername}
      />
      <View style={styles.passwordContainer}>
       <TextInput 
           placeholder="Password"
           style={styles.input} 
           secureTextEntry={!showPassword}
           textContentType='password'
           value={password}
           onChangeText={setPassword}
       />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text>{showPassword ? "Show":"Hide"}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgetPassword} onPress={handleForgetPassword}>
        <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      </TouchableOpacity>
      <TouchableHighlight style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableHighlight>

      <TouchableOpacity style={{marginTop: 20}} onPress={() => props.navigation.navigate('Register')}>
        <Text style={{color: 'blue'}}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  passwordContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderColor: 'gray',
    borderRadius: 5,
    borderLeftWidth: 5,
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  input:{
    flex: 1,
    height: 50,
    color: 'black',
  },
  inputUsername:{
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