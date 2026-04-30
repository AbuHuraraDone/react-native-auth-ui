import React, {useEffect} from "react";
import { DUMMY_POSTS } from "../constants/posts.js";
import { StyleSheet, Text, View, FlatList, Image, Alert, Button } from "react-native";
import { PostItem } from "./PostItem.jsx";



export function Posts() {
    useEffect(()=>{
        Alert.alert('Welcome', 'Welcome to the Posts Screen!');
    },[])
    // we pass [] as second argument to useEffect to ensure the alert is shown only once when the component mounts, not on every render.
    // if we omit the second argument, the alert will be shown every time the component re-renders, which can lead to an infinite loop of alerts if the state changes inside the component.
    return (
        <View style={styles.container}>
            <Button title="Refresh" onPress={()=>Alert.alert('Posts Refreshed', 'The posts have been refreshed!')} />
            <Text style={styles.postText}>Posts</Text>
            <FlatList 
                data = {DUMMY_POSTS}
                keyExtractor = {(item)=> item.id}
                renderItem={({item})=>{
                    return ( 
                        <PostItem 
                            title={item.title} 
                            body={item.body}
                            imageUrl={item.imageUrl}
                            author={item.author}
                            date={item.date}
                            likes={item.likes}  
                        />
                    )
                }}

            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
       
        justifyContent: 'left',
    },
    postText: {
        margin: 20,
        fontSize: 24,
        fontWeight: 'bold',
    }
})