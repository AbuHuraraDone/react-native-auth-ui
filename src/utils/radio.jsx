import React, {useState} from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export const Radio = () => {
    const radioOptions = [
        {id:1, label:'JavaScript'},
        {id:2, label:'Python'},
        {id:3, label:'Java'},
    ];
    const [selectedOption, setSelectedOption] = useState(radioOptions[0].id);
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'700'}}>Radio Component</Text>

            {  
                radioOptions.map(option => (
                    <TouchableOpacity onPress={() => setSelectedOption(option.id)} style={{margin:10}} key={option.id}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={styles.radioButton} >
                                {    
                                    selectedOption === option.id && <View style={styles.radioButtonSelected} />
                                }
                            </View>
                            <Text>{option.label}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    radioButton: {
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 10,
    },
    radioButtonSelected: {
        height: 15,
        width: 15,
        borderRadius: 10,
        backgroundColor: 'blue',    
    },
});
