import React,{ useState } from "react";
import { GlobalStyles } from '../styles/GlobalStyles';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from "react-native";

export function Register({title}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleRegister = () =>{
        if(username === '' || email === '' || password === '') {
            Alert.alert( "Error" ,'Please fill in all fields.');
            return;
        }
        Alert.alert("Register Info" ,`\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}`);
        setUsername('');
        setEmail('');
        setPassword('');
    }

    return (
        <View style={[styles.container, GlobalStyles.BaseContainer, {margin:10, borderRadius: 15}]}>
            <Text style={styles.registerText}>{title}</Text>
        
            <TextInput 
                placeholder="Username"
                style={styles.input} 
                value={username}
                onChangeText={setUsername}
            />  
            <TextInput 
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput 
                placeholder="Password"
                style={styles.input}    
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TextInput 
                placeholder="Confirm Password"
                style={styles.input}
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
        
            <TouchableHighlight style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
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
  registerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
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
