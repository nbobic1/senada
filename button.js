import React, { useState } from 'react';
import connectToChatGPT from './connectionToChatGPT';
import { View, Text, TouchableOpacity, TextInput, InputAccessoryView, StyleSheet, Dimensions, Button } from 'react-native';
const MyButton = () => {
    const [text, setText] = useState('');

    return (
        <InputAccessoryView nativeID="Rephrase">
            <View style={styles.accessory}>
                <Button
                    onPress={() => connectToChatGPT()}
                    title="Rephrase"
                />
            </View>
        </InputAccessoryView>
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