import React from "react";
import { DUMMY_POSTS } from "../constants/posts.js";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { PostItem } from "./PostItem.jsx";


export function Posts() {
    
    return (
        <View style={styles.container}>
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
    },
    postContainer: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        width: '90%',
        marginBottom: 10,
        alignSelf: 'center',
        borderRadius: 10,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    postBody: {
        fontSize: 14,
        marginBottom: 10,
        justifyContent: 'left',
        lineHeight: 15,
    },
    postImage: {
        width: '100%',
        alignSelf: 'center',
        height: 150,
        borderRadius: 10,
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
})