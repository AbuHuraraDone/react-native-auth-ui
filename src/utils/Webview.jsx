import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
export const Webview = () => {
    return (
        <View style={{flex:1}}> 
            <WebView source={{uri:'https://www.google.com'}} />
        </View>
    );
}