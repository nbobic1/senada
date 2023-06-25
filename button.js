import React, { useState } from 'react';
import connectToChatGPT from './connectionToChatGPT';

import { View, Text, TouchableOpacity,TouchableHighlight, TextInput, InputAccessoryView, StyleSheet, Dimensions, Button } from 'react-native';
const MyButton = () => {
   
    const [text, setText] = useState('');

    return (
        <View nativeID="Rephrase">
            <View style={styles.accessory}>
                
                <TouchableHighlight onPress={() => {
                    //    connectToChatGPT()
                        console.log("ldksjajgač");
                        postExample().then(function(data){
                            console.log("ma rkaj")
                        });
                    }
                }>
          <Text >Stop Recognizing</Text>
        </TouchableHighlight>
            </View>
        </View>
    );

};
const styles = StyleSheet.create({
    accessory: {
        width: Dimensions.get('window').width,
        height: 48,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        paddingHorizontal: 8
    }
})
export default MyButton;