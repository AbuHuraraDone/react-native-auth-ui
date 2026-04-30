import React,{useState, useEffect} from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

export const PostItem = ({ title, body, imageUrl, author, date, likes }) => {
    const [likesCount, setLikesCount] = useState(likes);
    useEffect(()=>{
        if(likesCount > likes) {    
            Alert.alert('Post Updated', `The post "${title}" now has ${likesCount} likes!`);
        }
    },[likesCount])

    return (
        <View style={styles.postContainer}>
            <Text style={styles.postTitle}>{title}</Text>
            <Text style={styles.postBody}>{body}</Text>
            <Image style={styles.postImage} source={{uri:imageUrl}} />
            <View style={styles.postFooter}>
                <Text style={{fontWeight:'700'}}>{author}</Text>
                <Text>{date}</Text>
                <Button title={`❤️ Like ${likesCount}`} onPress={() => setLikesCount(likesCount + 1)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        textAlign: 'justify',
    },
    postImage: {
        width: '100%',
        alignSelf: 'center',
        height: 150,
        borderRadius: 10,
    },
    postFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
})