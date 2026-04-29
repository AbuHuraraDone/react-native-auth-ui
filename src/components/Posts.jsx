import React from "react";
import { DUMMY_POSTS } from "../constants/posts.js";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";


export function Posts() {
    
    return (
        <View style={styles.container}>
            <Text style={styles.postText}>Posts</Text>
            <FlatList 
                data = {DUMMY_POSTS}
                keyExtractor = {(item)=> item.id}
                renderItem={({item})=>{
                    return ( <View style={styles.postContainer}>
                        <Text style={styles.postTitle}>{item.title}</Text>
                        <Text style={styles.postBody}>{item.body}</Text>
                        <Image style={styles.postImage} source={{uri:item.imageUrl}} />
                        <View style={styles.postFooter}>
                            <Text style={{fontWeight:'700'}}>{item.author}</Text>
                            <Text>{item.date}</Text>
                            <Text>❤️{item.likes}</Text>
                        </View>
                        
                    </View>)
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