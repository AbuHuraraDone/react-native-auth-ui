import React, {useEffect,useState} from "react";
import { DUMMY_POSTS } from "../constants/posts.js";
import { StyleSheet, Text, View, FlatList, Image, Alert, Button, ActivityIndicator } from "react-native";
import { PostItem } from "./PostItem.jsx";

export function Posts(props) {
    const {username} = props.route.params;

    const [showPosts, setShowPosts] = useState(true);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        Alert.alert('Welcome', 'Welcome to the Posts Screen!');
    },[])
    // we pass [] as second argument to useEffect to ensure the alert is shown only once when the component mounts, not on every render.
    // if we omit the second argument, the alert will be shown every time the component re-renders, which can lead to an infinite loop of alerts if the state changes inside the component.
    
    

    const handlePosts = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowPosts(!showPosts);
        }, 2000); 
    }

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-around', margin:10}}>
                <Button title="Refresh" onPress={()=>Alert.alert('Posts Refreshed', 'The posts have been refreshed!')} />
                <Button title={`${showPosts? "Hide":"Show"} Posts`} onPress={handlePosts} />
            </View>
            <Text style={styles.postText}>Posts {username}</Text>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {showPosts && 
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
            /> }
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