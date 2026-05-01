import React, {useState} from "react";
import { StyleSheet, Text, View, Modal, Button, Platform } from "react-native";
import { WebView } from "react-native-webview";
export const ModelCode = () =>{
    const [showModal, setShowModal] = React.useState(false);
    return (
        <View style={styles.container}>
            <Button title="Show Modal" onPress={() => setShowModal(true)} />
            <Modal
                visible={showModal}
                transparent={true}
                animationType="fade"
            >
                <View style={styles.modalContainer}>
                    <View style={{backgroundColor:'yellow', padding:30, borderRadius:10, alignItems:'center'}}>
                        <Text style={{fontSize:18, fontWeight:'700', marginBottom:15}}>This is a Modal!</Text>
                        <Button title="Close Modal" onPress={() => setShowModal(false)} />
                    </View> 
                </View>
            </Modal>

         </View>
    );   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Platform.OS === 'ios' ? 'red' : 'green',
        justifyContent: 'center',
        alignItems: 'center',   
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})