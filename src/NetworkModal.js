import React, { useState } from 'react'
import { Text, TouchableOpacity, Modal, StyleSheet, View} from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

const NetworkModal = ({visible, setVisible}) => {
    const netinfo = useNetInfo();
    return (
        <Modal
            visible={visible}
            onRequestClose={() => setVisible(!visible)}
            animationType='fade'
            transparent={true}
        >
            <View
                style={styles.container}
            >
                <View
                    style={styles.box_1}
                >
                    <Text style={styles.header}>
                        Oops
                    </Text>
                    <Text 
                        style={styles.text}
                    >
                        Seems like you are not connected to the internet,
                        Please check your connectivity and try again
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            if(netinfo.isConnected){
                                setVisible(false)
                            }
                        }}
                        style={styles.box_2}
                    >
                        <Text style={styles.try_again}>
                            Try Again
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>

        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box_1: {
        width: '80%',
        height: 250,
        borderRadius: 10,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 18,
        fontWeight:'600'
    },
    text: {
        width: 200,
        marginBottom: 20,
        textAlign: 'center'
    },
    box_2: {
        height: 45,
        width: '75%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'red'
    },
    try_again: {
        color: '#fff'
    }
})

export default NetworkModal