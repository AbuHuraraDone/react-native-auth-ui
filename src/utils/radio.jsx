import React, {useState} from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export const Radio = () => {
    const [selectedOption, setSelectedOption] = useState(1);
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'700'}}>Radio Component</Text>

            <TouchableOpacity onPress={() => setSelectedOption(1)} style={{margin:10}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={styles.radioButton} >
                        {    
                            selectedOption === 1 && <View style={styles.radioButtonSelected} />
                        }
                    </View>
                    <Text>Option 1</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setSelectedOption(2)}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={styles.radioButton} >
                        {    
                            selectedOption === 2 && <View style={styles.radioButtonSelected} />
                        }
                    </View>
                    <Text>Option 2</Text>
                </View>
            </TouchableOpacity>
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
