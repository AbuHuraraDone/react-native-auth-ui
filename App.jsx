import React, {useState} from 'react';
import { StyleSheet, View, StatusBar, Button  } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from './src/components/Login.jsx';
import { Register } from './src/components/Register.jsx';
import { Posts } from './src/components/Posts.jsx';
import { Radio } from './src/utils/radio.jsx';
import { ModelCode } from './src/utils/Modal.jsx';
import { Webview } from './src/utils/Webview.jsx';


const Stack = createNativeStackNavigator();
export default function App() {
  
    
  return (
  
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {
                  backgroundColor: 'blue',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
          }}
        >
          <Stack.Screen name="Login" component={Login} options={{title:'User Login'}} />
          <Stack.Screen name="Register" component={Register} options={{title:'User Register'}} />
          <Stack.Screen name="Posts" component={Posts} 
              options={({navigation})=>({
                title:'Posts List',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate('Login')}
                    title="Logout"
                  />
                ),  
              })} 
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}  