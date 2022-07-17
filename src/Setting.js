import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const SettingPage = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text>The Setting Page</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={{
                    width: '90%',
                    height: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'teal'
                }}
            >
                <Text style={{
                    color: 'white'
                }}>
                    Go to Home Page
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default SettingPage